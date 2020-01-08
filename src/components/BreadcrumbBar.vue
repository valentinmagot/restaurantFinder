<template>
    <div class="nav">
        <img alt="Vue logo" src="../assets/img/logo.svg">
      <div class="breadcrumbs">
        <router-link to="/" v-if="$route.path != '/'">Home</router-link>
        <router-link to="/reservation/restaurants" v-if="$route.path.startsWith('/reservation/restaurants')"> > Suggestions</router-link>
        <router-link to="/reservation/restaurants/restaurantoverview" v-if="$route.path.startsWith('/reservation/restaurants/restaurantoverview') ">   > RestaurantOverview</router-link>
        <router-link to="/reservation/restaurants/restaurantoverview/order/checkout" v-if="$route.path.startsWith('/reservation/restaurants/restaurantoverview/order/checkout')"> > Chekout</router-link>
        <router-link to="/reservation/restaurants/restaurantoverview/order/confirmation" v-if="$route.path.startsWith('/reservation/restaurants/restaurantoverview/order/checkout/confirmation') "> > Confirmation</router-link>
      </div>
    </div>
</template>

<script>
export default{
    name: "BreadcrumbBar",
    data(){
        return{

        }
    }
}
</script>

<style scoped lang="scss">
@import '@/assets/css/main.scss';


.nav {
  display: flex;
  flex-direction: row;
  align-content: center;
  justify-content: flex-start;
  padding: 30px;
  box-shadow: $base-discret-shadow;
  // background-color: red;
}

.nav .breadcrumbs {
  align-self: center;
  padding: 0 10px;
  color: $base-color;
  // color: white;
}

.nav a {
  padding: 0 5px;
  font-weight: bold;
  color: $base-color;
  // color: white;
  text-decoration: none;

}

.nav a:hover {
  padding: 5px;
  font-weight: bold;
  color: $base-color-focused;

}

.nav a.router-link-exact-active {
  color: #2c3e50;
}

.nav img {
  width: 60px;
  height: 50px;
}


</style>
