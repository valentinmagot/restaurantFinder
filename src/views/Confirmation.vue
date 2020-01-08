<template>
  <div class="body">
    <!-- <h1>This is the Confirmation page!</h1> -->
    <h1 class="thankYou">Thank you!</h1>
    <p style="text-align: center">Your reservation has been successful. You can review the details below. A confirmation has been sent by email.</p>
    <div class="details">
      <h2>Reservation</h2>
      <p><strong>Name:</strong> {{firstName}} {{lastName}}</p>
      <p><strong>Date and time:</strong> {{date}}, at {{timeslot}}</p>
      <p><strong>Restaurant:</strong> {{restaurant.name}} </p>
      <p><strong>Address:</strong> {{restaurant.address}}</p>
      <p><strong>Place:</strong> {{spot}}</p>
      <p><strong>For:</strong> {{guests}}</p>
    </div>
    <div class="details">
      <div v-if="cart.length == 0">
        <h2>Order</h2>
        <p><em>No order</em></p>
      </div>
      <div v-if="cart.length != 0" class="cart">
        <OrderItem
          v-model="cart"
          :interactive="false"
          class="oderitem"
        />
      </div>
    </div>
    <button v-on:click="newReservation">Make a new reservation</button>
  </div>
</template>

<script>
import OrderItem from '@/components/OrderItem.vue'
export default{
    name: "Confirmation",
    components: {
      OrderItem,
    },
    data(){
      let restaurant = JSON.parse(localStorage.restaurant);
      return {
        restaurant: restaurant,
        firstName: localStorage.firstName,
        lastName: localStorage.lastName,
        guests: localStorage.guests,
        spot: localStorage.spot,
        cart: restaurant.cart,
        date: localStorage.date,
        timeslot: localStorage.timeslot,
      }
    },
    methods: {
      newReservation: function() {
        this.$router.push('/');
      }
    }
}
</script>

<style scoped lang="scss">
@import '@/assets/css/main.scss';
.body {
  margin-left: 15%;
  margin-right: 15%;
}

.thankYou {
  font-size: 50px;
  text-align: center;
}

div.details {
  width: 45%;
  float: left;
  position: relative;
  // background-color: red;
  padding: 1%;
  margin: 1%;
  border-top: 1px solid black;
  // border-left: 1px solid black;
  // border-right: 1px solid black;
  border-bottom: 1px solid black;
}

button{
    margin: auto;
    display: flex;
    justify-content: center;
    // align-items: center;
    width: 98%;
    height: 50%;
    padding: 10px;
    // margin-top: 10px;
    box-shadow: $base-discret-shadow;
    background: $base-color;
    color: white;
    font-size: 17px;
    font-weight: bold;
    border: none;
    border-radius: 5px;
    // border-bottom-left-radius: 8px;
    // border-bottom-right-radius: 8px;
    cursor: pointer;
    &:hover{
        background-color: $base-color-focused;
    }
}

.cart {
  width: 100%;
  max-height: 400px;
}
</style>
