import { createRouter, createWebHistory } from 'vue-router'
import HomeLayout from '../views/HomePage.vue';
import DoctorLayout from '../views/DoctorPage.vue';
import HomePage from '../views/HomePage.vue';
import DoctorPage from '../views/DoctorPage.vue';

const routes = [
  {
    path: '/',
    component: HomePage,
    meta: { layout: 'HomeLayout' }
  },
  {
    path: '/doctor/:id',
    component: DoctorPage,
    meta: { layout: 'DoctorLayout' }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
