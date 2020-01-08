import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Reservation from './views/Reservation.vue'
import Restaurants from './views/Restaurants.vue'
import RestaurantOverview from './views/RestaurantOverview.vue'
import Order from './views/Order.vue'
import Checkout from './views/Checkout.vue'
import Confirmation from './views/Confirmation.vue'


Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/reservation',
      name: 'reservation',
      component: Reservation,
      children: [
          {
              path: 'restaurants',
              component: Restaurants
          },
          {
              path: 'restaurants/restaurantoverview',
              component: RestaurantOverview
          },
          {
            path: 'restaurants/restaurantoverview/order',
            component: Order
          },
          {
              path: 'restaurants/restaurantoverview/order/checkout',
              component: Checkout
          },
          {
              path: 'restaurants/restaurantoverview/order/checkout/confirmation',
              component: Confirmation
          },
          
      ]
  },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
  }
  ]
})
