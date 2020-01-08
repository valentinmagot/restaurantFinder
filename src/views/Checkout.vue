<template>
<!-- http://localhost:8080/reservation/restaurants/restaurantoverview/order/checkout -->
  <div>
    <!-- <h1>This is the checkout page!</h1> -->
    <form v-on:submit.prevent="onSubmit">
      <div class="container">
        <!-- Personal information -->
        <div class="form">
        <h3>Personal information</h3>
          <div>
            <label for="piFirstName">First name</label><br>
            <input id="piFirstName" v-model="firstName" type="text" placeholder="First name" required pattern="^[A-Za-z ,.'-]+"
            oninvalid="this.setCustomValidity('Enter your first name')" onchange="this.setCustomValidity('')">
          </div>
          <div>
            <label for="piLastName">Last name</label><br>
            <input id="piLastName" v-model="lastName" type="text" placeholder="Last name" required="required" pattern="^[A-Za-z ,.'-]+"
            oninvalid="this.setCustomValidity('Enter your last name')" oninput="this.setCustomValidity('')">
          </div>
          <div>
            <label for="piEmail">Email address</label><br>
            <!-- regex from https://stackoverflow.com/questions/742451/what-is-the-simplest-regular-expression-to-validate-emails-to-not-accept-them-bl -->
            <input id="piEmail" type="text" placeholder="xyz@example.com" required="required" pattern="^[^@\s]+@[^@\s]+\.[^@\s]+$"
            oninvalid="this.setCustomValidity('Enter a valid email address')" oninput="this.setCustomValidity('')">
          </div>
          <!-- <div>
            <label for="piEmailConf">Confirm email address</label><br>
            <input id="piEmailConf" type="text" placeholder="xyz@example.com" required="required" pattern="/^[a-z ,.'-]+/i" oninvalid="this.setCustomValidity('Enter your name')"
        oninput="this.setCustomValidity('')">
          </div> -->
          <div>
            <label for="piPhone">Phone number</label><br>
            <input id="piPhone" type="text" placeholder="(613) 555-1234" maxlength="10" required="required" pattern="[0-9]{10}"
            oninvalid="this.setCustomValidity('Your phone number should contain 10 digits.')" oninput="this.setCustomValidity('')">
          </div>
        </div> <!-- form end -->
        <!-- Payment method -->
        <div class="form" v-if="cart.length != 0">
          <h3>Payment</h3>
          <div>
            <label>Type of payment</label><br>
            <input type="radio" name="ccType" value="visa" required @click="hide=true"> Visa
            <input type="radio" name="ccType" value="mastercard" required @click="hide=true"> MasterCard
            <input type="radio" name="ccType" value="cash" required @click="hide=false"> On&nbsp;site
            <!-- <br> -->
          </div>
          <div v-if="hide">
            <div>
              <label for="ccName">Name on card</label><br>
              <input id="ccName" type="text" placeholder="Name on card" required pattern="^[A-Za-z ,.'-]+"
              oninvalid="this.setCustomValidity('Enter your full name.')" oninput="this.setCustomValidity('')">
            </div>
            <div>
              <label for="ccNumber">Credit card number</label><br>
              <input id="ccNumber" type="text" placeholder="1111 2222 3333 4444" maxlength="16" required pattern="[0-9]{16}"
              oninvalid="this.setCustomValidity('Enter a valid credit card number.')" oninput="this.setCustomValidity('')">
            </div>
            <div style="width: 30%; float:left; margin-right:20px">
              <label for="ccExp">Exp. (month)</label><br>
              <input id="ccExp" type="number" placeholder="MM" maxlength="2" min="1" max="12" required
              oninvalid="this.setCustomValidity('Enter a valid expiration month.')" oninput="this.setCustomValidity('')">
            </div>
            <div style="width: 30%; float:left; margin-right:20px">
              <label for="ccExp">Exp. (year)</label><br>
              <input id="ccExp" type="number" placeholder="YY" maxlength="2" min="19" max="40" required
              oninvalid="this.setCustomValidity('Enter a valid expiration year.')" oninput="this.setCustomValidity('')">
            </div>
            <div style="width: 30%; float:left">
              <label for="ccCVV">CVV</label><br>
              <input id="ccCVV" type="number" placeholder="123" maxlength="3" min="0" max="999" required
              oninvalid="this.setCustomValidity('Enter a valid CVV.')" oninput="this.setCustomValidity('')">
            </div>
          </div>
        </div> <!-- form end -->
        <div v-if="cart.length != 0" class="cart">
            <OrderItem
              v-model="cart"
              :interactive="false"
              />
        </div>
      </div> <!-- container end -->
      <!-- <button v-on:click="warn('Form cannot be submitted yet.', $event)">
      Submit
      </button> -->
      <div class="next-section">
        <input type="submit" value="Next">
      </div>
      <!-- <a href="#" v-on:click="submit">SUBMIT</a> -->

    </form>
    <!-- OrderComponent -->
  </div>
</template>

<script>
import OrderItem from '@/components/OrderItem.vue'
export default{
    name: "Checkout",
    components: {
      OrderItem
    },
    data() {
      let restaurant = JSON.parse(localStorage.restaurant);
      return {
        restaurant: restaurant,
        hide: false,
        firstName: "",
        lastName: "",
        cart: restaurant.cart,
      }
    },
    methods: {
      // done(e){
      //   e.preventDefault();
      //   document.getElementById("myform").submit();
      //   localStorage.firstName = this.firstName;
      //   localStorage.lastName = this.lastName;
      //   this.$router.push('/reservation/restaurants/restaurantoverview/order/checkout/confirmation');
      // },

      // https://stackoverflow.com/questions/48028718/using-event-modifier-prevent-in-vue-to-submit-form-without-redirection
      onSubmit() {
        localStorage.firstName = this.firstName;
        localStorage.lastName = this.lastName;
        this.$router.push('/reservation/restaurants/restaurantoverview/order/checkout/confirmation');
      }
      // validateBeforeSubmit: function(message, event) {
      //   // Prevent the form from submitting
      //   console.log("1");
      //   if (this.errors.any()) {
      //               console.log("2");
      //     event.preventDefault();


      //   } else {
      //      console.log("3");
      //     localStorage.firstName = this.firstName;
      //     localStorage.lastName = this.lastName;
      //     this.$router.push('/reservation/restaurants/restaurantoverview/order/checkout/confirmation');
      //   }
      // },
      // letsgo() {
      //   var form = document.getElementById("myform");
      //   console.log('1');
      //   form.onsubmit = function(e) {
      //     if (form.errors.any()) {
      //       console.log('2');
      //       e.preventDefault();
      //     } else {
      //       console.log('3');
      //       localStorage.firstName = this.firstName;
      //       localStorage.lastName = this.lastName;
      //       this.$router.push('/reservation/restaurants/restaurantoverview/order/checkout/confirmation');
      //     }
      //   }
      // },
      // submit: function(){
      //   this.$refs.form.submit();
      // }
    }
}


</script>

<style scoped lang="scss">
@import '@/assets/css/main.scss';
* {
  box-sizing: border-box;
}

div.container {
  // display: inline-block;
  width: 100%;
}

div.form {
  // display: inline-block;
  width: 30%;
  float: left;
  margin: 20px;
}

input[type=text], input[type=number] {
  width: 100%;
  margin-top:5px;
  margin-bottom: 20px;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 3px;
}

input[type=radio] {
  margin-top:15px;
  margin-bottom:38px;
}

label {
  margin-bottom: 40px;
  // padding-bottom: 40px;
  // display: block;
}

.next-section {
  display:block;
  padding: 10px 0px;
}

.next-section input[type=submit]{
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

.next-section input[type=submit]:hover{
  background-color: $base-color-faded;
}

.cart {
  width: 30%;
  float: left;
  margin: 20px;
  max-height: 400px;
}
</style>
