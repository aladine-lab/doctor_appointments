import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faUser, faBuilding, faStar, faArrowAltCircleLeft } from '@fortawesome/free-regular-svg-icons'
import {  faStar as farStar } from '@fortawesome/free-solid-svg-icons'

/* add icons to the library */
library.add(faUser,faBuilding,faStar,farStar, faArrowAltCircleLeft)

createApp(App).component('font-awesome-icon', FontAwesomeIcon).use(router).mount('#app')
