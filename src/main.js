import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faMapMarkerAlt, faStar, faBookOpen, faCalendarAlt, faTimesCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import Toasted from 'vue-toasted';
import '@/assets/css/main.scss';

library.add(faMapMarkerAlt)
library.add(faStar)
library.add(faBookOpen)
library.add(faCalendarAlt)
library.add(faTimesCircle)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

Vue.use(
    Toasted,
    //options
    {
        duration: 3000,
        keepOnHover: true,
        theme: 'bubble',
        type: 'info',
        position: 'top-left'
    }
);


this.$toasted.register(
    'error',
    "Oops... Something went wrong...",
    {
        type: 'error',
    }
);

Vue.use(VueForm);

