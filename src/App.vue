<template>
  <component :is="layoutComponent">
    <router-view />
  </component>
</template>

<script>
import HomeLayout from './views/HomePage.vue'
import DoctorLayout from './views/DoctorPage.vue'

export default  {
  name: 'App',
  components: {
    HomeLayout,
    DoctorLayout
  },
  computed: {
    layoutComponent() {
      // Return the layout based on the route meta or default to HomeLayout
      return this.$route.meta.layout || 'HomeLayout';
    }
  },
}
</script>

<style>
body {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}
#app {
  font-family: "Poppins", sans-serif;
}

html {
  scroll-behavior: smooth;
}
/* @media (min-width: 768px) {
  .main-content {
    width: 750px;
  }
}
@media (max-width:767px) {
  .main-content {
    width: 450px;
  }
} */
</style>