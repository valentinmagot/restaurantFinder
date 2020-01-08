<template>
    <div>
      <!-- <h1>This is the restaurants page!</h1> -->
      <h1>Restaurants in {{ location }}</h1>
      <p>Here's a list of the restaurants in your area. You can narrow down the results using the filter on the right.</p>
      <p>Select a restaurant from the list below to begin the reservation process.</p>
      <div class="restaurantList">
        <RestaurantCard
          v-bind:key="index" v-for="(restaurant, index) in filteredList"
          v-on:click.native="restaurant_selected(restaurant)"
          class="card"
          :restaurant-name="restaurant.name"
          :cuisine-type="restaurant.cuisine"
          :price-index="'$'.repeat(restaurant.price)"
          :score="restaurant.rating"
          :imgSrc="restaurant.imgSrc"></RestaurantCard>
      </div>
      <FilterComponent v-model="filters" style="min-width: 20%; float: right"/>
    </div>
</template>

<script>
import RestaurantCard from '@/components/RestaurantCard.vue'
import FilterComponent from '@/components/FilterComponent.vue'
export default{
    name: "Restaurants",
    components: {
      RestaurantCard,
      FilterComponent
    },
    data(){
        return {
            location: localStorage.location,
            // default values for the filters
            filters: {
                price: 3,
                rating: 2,
                guests: 2,
                cuisine: ''
            },
            restaurants: [
                {
                    name: "McDonalds",
                    address: "60 George St, Ottawa, ON K1N 1J4",
                    cuisine: "American",
                    rating: 3,
                    price: 1,
                    imgSrc: "https://miro.medium.com/max/1000/1*sszpZOih_xJV_lZsDbog-Q.png",
                    spots: [
                        { name: 'Inside' },
                        { name: 'Bar' },
                        { name: 'No prefferences' },
                    ],
                    timeslots: [
                      "10:00 AM",
                      "10:30 AM",
                      "12:00 PM",
                      "02:30 PM",
                      "05:00 PM",
                      "06:30 PM"
                    ],
                    menuItems: [
                      {
                          name: "BigMac",
                          description: "Delicious Burger!",
                          price: 9.99
                      },
                      {
                          name: "McTasty",
                          description: "Tasty Burger!",
                          price: 12.99
                      },
                      {
                          name: "6 Nuggets",
                          description: "Delicious Nugget!",
                          price: 11.99
                      },
                  ],
                  cart: [],
                },
                {
                    name: "A&W",
                    address: "50 Rideau St Unit #FC013, Ottawa, ON K1N 9J7",
                    cuisine: "American",
                    rating: 4,
                    price: 2,
                    imgSrc: "https://upload.wikimedia.org/wikipedia/en/thumb/b/bc/A%26W_Canada_Logo.svg/1280px-A%26W_Canada_Logo.svg.png",
                    spots: [
                        { name: 'Inside' },
                        { name: 'Outside' },
                        { name: 'No prefferences' },
                    ],
                    timeslots: [
                      "09:00 AM",
                      "10:30 AM",
                      "12:00 PM",
                      "02:30 PM",
                      "08:00 PM",
                      "09:30 PM"
                  ],
                    menuItems: [
                      {
                          name: "TeenBurger",
                          description: "Delicious Burger!",
                          price: 9.99
                      },
                      {
                          name: "MozaBurger",
                          description: "Tasty Burger!",
                          price: 12.99
                      },
                      {
                          name: "MamaBurger",
                          description: "Amazing Burger!",
                          price: 11.99
                      },
                  ],
                  cart: [],
                },
                {
                    name: "Three Brothers",
                    address: "530 Rideau St, Ottawa, ON K1N 5Z6",
                    cuisine: "Lebanese",
                    rating: 2,
                    price: 1,
                    imgSrc: "https://media-cdn.tripadvisor.com/media/photo-s/09/c8/ed/e5/3-brothers.jpg",
                    spots: [
                        { name: 'Inside' },
                        { name: 'Terrace' },
                        { name: 'No prefferences' },
                    ],
                    timeslots: [
                      "08:00 AM",
                      "11:30 AM",
                      "12:00 PM",
                      "01:30 PM",
                      "07:00 PM",
                      "08:30 PM"
                  ],
                  menuItems: [
                      {
                          name: "Beef Shawarma",
                          description: "Delicious Sandwich!",
                          price: 9.99
                      },
                      {
                          name: "Fallafel",
                          description: "Tasty Dish!",
                          price: 12.99
                      },
                      {
                          name: "Chicken Shawarma",
                          description: "Delicious Sandwich!",
                          price: 11.99
                      },
                  ],
                  cart: [],
                },
                {
                    name: "Domino's",
                    address: "400 Friel St, Ottawa, ON K1N 7W6",
                    cuisine: "Italian",
                    rating: 4,
                    price: 3,
                    imgSrc: "https://cache.dominos.com/nolo/ca/en/05595/assets/build/images/promo/dominos_social_logo.jpg",
                    spots: [
                        { name: 'Inside' },
                        { name: 'First floor' },
                        { name: 'No prefferences' },
                    ],
                    timeslots: [
                      "09:30 AM",
                      "10:00 AM",
                      "12:00 PM",
                      "03:30 PM",
                      "07:00 PM",
                      "09:30 PM"
                  ],
                  menuItems: [
                      {
                          name: "Veggie Pizza",
                          description: "Delicious Pizza!",
                          price: 9.99
                      },
                      {
                          name: "Meat Pizza",
                          description: "Tasty Pizza!",
                          price: 12.99
                      },
                      {
                          name: "Cheese Pizza",
                          description: "Delicious Pizza!",
                          price: 11.99
                      },
                  ],
                  cart: [],
                },
            ]
        }
    },
    computed:{
        filteredList(){
            return this.restaurants.filter(function(restaurant){
                if(restaurant.rating < this.filters.rating)
                    return false;
                if(restaurant.price > this.filters.price)
                    return false;
                if(!restaurant.cuisine.toLowerCase().includes(this.filters.cuisine.toLowerCase()))
                    return false;
                return true;
            }.bind(this));
        }
    },
    methods:{
        restaurant_selected(restaurant) {
            localStorage.restaurant = JSON.stringify(restaurant);
            localStorage.guests = this.filters.guests;
            this.$router.push("/reservation/restaurants/restaurantoverview")
        }
    }
}
</script>

<style scoped lang="scss">
html, body{
    margin: 0;
    font-family: Arial, Helvetica, sans-serif;
}
.restaurantList {
  overflow: auto;
  max-height: 450px;
  width: 70%;
  float: left;
  margin-right: 10px;
}

.card{
    cursor: pointer;
}

</style>
