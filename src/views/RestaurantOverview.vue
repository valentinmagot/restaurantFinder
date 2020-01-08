<template>
    <div class="container">
      <modal v-if="showModal" @close="showModal = false">
        <!--
          you can use custom content here to overwrite
          default content
        -->
      </modal>

      <modal v-if="showMenuModal" @close="showMenuModal = false">
        <!--
          you can use custom content here to overwrite
          default content
        -->
          <h3 slot="header">This is our menu</h3>
          <div slot="body">
            <h3>Menu</h3>
            <div class="body-container">
                <div class="menu">
                    <div class="menu-list">
                      <MenuItemCard
                          v-bind:key="index" v-for="(item, index) in restaurant.menuItems"
                          :foodName="item.name"
                          :description="item.description"
                          :foodPrice="item.price + '$'"
                          imgSrc="https://freepngimg.com/thumb/food/1-2-food-free-png-image-thumb.png"></MenuItemCard>
                    </div>
                </div>
            </div>
          </div>
          <Button class='btn' slot="btn" @click="showMenuModal = false" >Close</Button>
      </modal>

      <!-- resto info -->
      <div class="title-container">
          <h1>{{ restaurant.name }}</h1>
      </div>
       <div class="image-container">
           <img :src="restaurant.imgSrc" >
       </div>
       <div class="restaurant-info">
           <p>{{ restaurant.address }}</p>
           <p><font-awesome-icon class="seperator" icon="star"/></p>
           <p>Rating: {{ restaurant.rating }}</p>
            <p><font-awesome-icon class="seperator" icon="star"/></p>
           <p>{{ restaurant.cuisine }}</p>
       </div>
       <div class="menu-btn-div" @click="showMenuModal = true">
           <LargeButton
            class="menu-btn"
            buttonText="View our menu"
            buttonIcon="book-open"
            />
       </div>
       <div class="people-field">
         <label for="num-people">Number of people:</label><br>
         <input id="num-people" v-model="guests" value="2" min="1" required type="number">
       </div>
       <div class="time-slots-container" >
        <p>Available times slots on: <datetime v-model="date" format="MM/DD/YYYY" width="300px" ></datetime></p>
        <div class="time-slots">
            <TimeSlot
              v-for="(timeslot, index) in restaurant.timeslots"
              :key="index"
              :time="timeslot"
              @click.native="indexSelected = index"
              :class="[ (indexSelected === index) ? 'timeslot-selected' : ' ', 'time' ]"
            />
        </div>
       </div>
       <div class="spots-section">
         <p>Available spots at selected date and time</p>
         <div class="btn-group" >
            <button
            v-bind:key="index"
            v-for="(item, index) in restaurant.spots"
            @click="spotSelected = item.name"
            :class="[(spotSelected === item.name) ? 'spot-selected' : '']"
            >{{ item.name }}</button>
          </div>
       </div>
       <div class="next-section">
         <button @click="next" >Next</button>
       </div>
    </div>
</template>

<script>

import LargeButton from '@/components/LargeButton.vue'
import TimeSlot from '@/components/TimeSlot.vue'
import Modal from '@/components/Modal.vue'
import MenuItemCard from '@/components/MenuItemCard.vue'
import Calendar from '@/components/Calendar.vue'
import datetime from 'vuejs-datetimepicker';

export default{
    name: "RestaurantView",
    components: {
      LargeButton,
      TimeSlot,
      Modal,
      MenuItemCard,
      Calendar,
      datetime,
    },
    data(){
      return {
          restaurant: JSON.parse(localStorage.restaurant),
        indexSelected: localStorage.timeslot ? JSON.parse(localStorage.restaurant).timeslots.indexOf(localStorage.timeslot) : "",
        spotSelected: localStorage.spot ?  localStorage.spot : "",
        showModal: false,
        showMenuModal: false,
        date: '',
        guests: 2,

      }
    },
    methods: {
        next(){
            if(this.indexSelected === ""){
                this.$toasted.error("Choose a timeslot!");
                return;
            }
            localStorage.timeslot = this.restaurant.timeslots[this.indexSelected] === undefined ? 'Not selected' : this.restaurant.timeslots[this.indexSelected];
            localStorage.spot     = this.spotSelected === "" ? 'No preferences' : this.spotSelected;
            localStorage.date     = this.date;
            localStorage.guests   = this.guests;
            this.showModal             = true;
        }
    }
}
</script>

<style scoped lang="scss">
@import '@/assets/css/main.scss';
* {
  box-sizing: border-box;
}

html, body {
    margin: 0;
    font-family: Arial, Helvetica, sans-serif;
}
.router-view {
    padding: 0;
}
.container {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.title-container {
    margin: 0 30px;
    width: 100%;
    text-align: center;

}
.restaurant-info {
    margin: 0 30px;
    width: 100%;
    display: flex;
    flex-direction: column;
    text-align: center;
}

.restaurant-info p {
    margin: .5em 0;
}

.image-container {
    margin: 0 30px;
    width: 100%;
    text-align: center;
}

.image-container img{
    width: 50%;
}

.menu-btn-div {
    width: 100%;
}

.menu-btn {
    width: 100%;

}
.calendar-btn-div {
    width: 100%;
}

.calendar-btn {
    width: 100%;
}

.time-slots-container {
    padding: 10px;
    width: 100%;
}
.time-slots-container p {
    margin-left: 10px;
}


.time-slots {
    display: flex;
    overflow: auto;
}

.timeslot-selected{
    background-color: $base-color-focused;
}

.spot-selected{
    background-color: $base-color-focused !important;
}

.time {
    margin: 0 10px;
}

.spots-section {
  padding: 10px;
  width: 100%;
}

.spots-section p {
  margin-left: 10px;
}

.btn-group  {
  display: flex;
  margin-left: 10px;
}

.btn-group button {
  background-color: $base-color; /* Green background */
  border: 2px solid red; /* Green border */
  color: white; /* White text */
  padding: 10px 24px; /* Some padding */
  cursor: pointer; /* Pointer/hand icon */
  float: left; /* Float the buttons side by side */
  text-transform: uppercase;
}

/* Clear floats (clearfix hack) */
.btn-group:after {
  content: "";
  clear: both;
  display: table;
}

.btn-group button:not(:last-child) {
  border-right: none; /* Prevent double borders */
}

/* Add a background color on hover */
.btn-group button:hover {
  background-color: #f06359;
}

.next-section {
  width: 100%;
  padding: 10px 0px;
}

.next-section button{
  font-size: 18px;
  float: right;
  background-color: $base-color; /* Green background */
  border: none;
  box-shadow: $base-discret-shadow;
  color: white; /* White text */
  padding: 10px 24px; /* Some padding */
  cursor: pointer; /* Pointer/hand icon */
  border-radius: 5px;
  margin-right: 10px;

}

.next-section button:hover{
  background-color: $base-color-faded;

}

.body-container {
    display: flex;
    width: 100%;
    height: 400px;
    justify-content: space-between;
}

.menu {
    width: 100%;
    height: 100%;
    // background-color: red;


}

.menu-list {
  overflow: auto;
  height: 100%;
  width: 100%;
//   float: left;
//   margin-right: 10px;
}

.btn {
  float: right;
  font-size: 18px;
  background-color: $base-color; /* Green background */
  border: none;
  box-shadow: $base-discret-shadow;
  color: white; /* White text */
  padding: 10px 24px; /* Some padding */
  cursor: pointer; /* Pointer/hand icon */
  border-radius: 5px;
  margin: 1em;

}
.people-field {
  padding: 10px;
  width: 100%;
  margin-top: 10px;
  margin-left: 10px;
  float: left;
}

input[type=number]{
  width: 5%;
  margin-top: 5px;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 3px;
}
</style>
