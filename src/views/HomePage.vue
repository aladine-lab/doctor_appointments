<template>
    <div class="main-content">
    <headerTop/>
    <div v-if="doctors.length">
      <div v-for="doctor in doctors" :key="doctor.id" class="content">
        <router-link :to = "`/doctor/${doctor.id}`">
          <div class="doctor">
            <img src="../assets/doc.png" alt="">
            <div class="doc-info">
                <h3>Dr. {{ doctor.name }}</h3>
                <h5>Speacialty :{{ doctor.specialty }}</h5>
                <p>{{ doctor.workstation }}</p>
                <span><font-awesome-icon icon="fa-regular fa-building" /> {{doctor.place }}</span>
                <div class="stars">
                <font-awesome-icon icon="fa-solid fa-star" class="star"/>
                <font-awesome-icon icon="fa-solid fa-star" class="star"/>
                <font-awesome-icon icon="fa-solid fa-star" class="star" />
                <font-awesome-icon icon="fa-solid fa-star" class="star"/>
                <font-awesome-icon icon="fa-regular fa-star" />
              </div>
            </div>
          </div>
        </router-link>
      </div>
    </div>
    <div v-else>
      <p>There Is NO Doctors</p>
    </div>
    </div>
</template>

<script>
import headerTop from '../components/headerTop.vue';
export default {
  data() {
    return {
        doctors: []
    }
    },
    components: {
    headerTop
    },
    mounted () {
    fetch("http://localhost:3000/doctors")
    .then(res => res.json())
    .then(data => this.doctors = data)
    }
}
</script>

<style scoped>
.stars {
  font-size: 10px;
    float: right;
    vertical-align: middle;
    margin-top: 7px;
}
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
.main-content {
}
.content {
width: 100%;
border-bottom: 1px solid #F3F4F6;
}
h3 {
    color: #0E7490;
}
h5 {
    font-weight: medium;
    color: #6B7280;
    font-size: 13px;
    margin: 0;
}
h3, p {
font-size: 14px;
margin: 0;
}
p {
    font-size: 12px;
    color: #6B7280;
}
a {
  text-decoration: none;
  color : black;
}
span {
    font-size: 11px;
    margin: 10px 0 ;
    color: #6B7280;
}
/* doctor  */
.doctor {
    display: flex;
    background-color: #F9FAFB;
    padding: 10px 40px;
}
.doc-info {
    margin-left: 10px;
    width: 100%;
}
.content-info span {
  /* margin-right: ; */
}
.star {
  color: gold;
  font-size: 10px;
}
.doctor img {
    width: 78px;
    height: 78px;
    border-radius: 50%;
}
</style>
