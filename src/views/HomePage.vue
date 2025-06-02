<template>
    <div class="main-content">
    <headerTop/>
    <doctor/>
    </div>
</template>

<script>
import headerTop from '../components/headerTop.vue';
import doctor from '../components/doctor.vue';
export default {
  data() {
    return {
    }
    },
    components: {
    headerTop,
    doctor,
    }
}
</script>

<style scoped>
@media (max-width:767px) {
  header .mega-menu {
    flex-direction: column;
    gap: 0px;
    padding: 0 10px;
  }
}
header .mega-menu .links li:not(:last-child) {
  border-bottom: 1px solid #e9e6e6;
}
</style>
