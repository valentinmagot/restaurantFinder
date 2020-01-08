<!-- template for the modal component -->
<template type="text/x-template" id="modal-template">
  <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">

          <div class="modal-header">
            <slot name="header">
              <h3>Tired of Waiting ?</h3>
              <p>Place your order now and eat when you arrive.</p>
            </slot>
          </div>

          <div class="modal-body">
            <slot name="body">
                <h3>Menu </h3>
                <div class="body-container">
                    <div class="menu">
                        <div class="menu-list">
                            <MenuItemCard
                                v-bind:key="index" v-for="(item, index) in restaurant.menuItems"
                                v-on:click.native="cart.push(item)"
                                :foodName="item.name"
                                :description="item.description"
                                :foodPrice="item.price + '$'"
                                imgSrc="https://freepngimg.com/thumb/food/1-2-food-free-png-image-thumb.png"></MenuItemCard>
                        </div>
                    </div>
                    <div class="cart">
                        <OrderItem
                         v-model:order="cart"
                          />
                    </div>
                </div>

            </slot>
            
            <slot name="btn">
                    <button class="modal-default-button" @click="done">Continue</button>
                    <button class="modal-default-button-close" @click="$emit('close')">Close</button>
            </slot>
          </div>

        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import MenuItemCard from '@/components/MenuItemCard.vue'
import OrderItem from '@/components/OrderItem.vue'
export default {

    name: "Modal",
    components: {
        MenuItemCard,
        OrderItem,
    },
    data(){
      let restaurant = JSON.parse(localStorage.restaurant);
        return {
            restaurant: restaurant,
            cart: restaurant.cart,
        }
    },
    methods:{
        done(){
          this.restaurant.cart = this.cart;
            localStorage.restaurant =  JSON.stringify(this.restaurant);
            this.$router.push("/reservation/restaurants/restaurantoverview/order/checkout")
        }
    }
}
</script>

<style <style lang="scss">

@import '@/assets/css/main.scss';

.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .5);
  display: table;
  transition: opacity .3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  height: 80%;
  width: 80%;
  margin: 0px auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
  transition: all .3s ease;
  font-family: Helvetica, Arial, sans-serif;
  overflow: auto;
}

.modal-header h3 {
  margin-top: 0;
  color: $base-color;
}

.modal-body {
  margin: 20px 0;
}

.modal-default-button {
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

.modal-default-button:hover {
  float: right;
  font-size: 18px;
  background-color: $base-color-faded; /* Green background */
  border: none;
  box-shadow: $base-discret-shadow;
  color: white; /* White text */
  padding: 10px 24px; /* Some padding */
  cursor: pointer; /* Pointer/hand icon */
  border-radius: 5px;

}

.modal-default-button-close {
  float: right;
  font-size: 18px;
  background-color: gray; /* Green background */
  border: none;
  box-shadow: $base-discret-shadow;
  color: white; /* White text */
  padding: 10px 24px; /* Some padding */
  cursor: pointer; /* Pointer/hand icon */
  border-radius: 5px;
  margin: 1em;

}

.menu-list {
  overflow: auto;
  height: 100%;
  width: 100%;
//   float: left;
//   margin-right: 10px;
}

.body-container {
    display: flex;
    width: 100%;
    height: 400px;
    justify-content: space-between;
}

.menu {
    width: 50%;
    height: 100%;
    // background-color: red;


}

.cart {
    width: 40%;
    height: 100%;
    // background-color: yellow;

}

/*
 * The following styles are auto-applied to elements with
 * transition="modal" when their visibility is toggled
 * by Vue.js.
 *
 * You can easily play with the modal transition by editing
 * these styles.
 */

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>
