<template>
    <div class="content">
      <h2>TAKE AN APPOINTMENT WITH</h2>
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
          <div class="calendar">
        <div class="month">
            <div class="prev">&#10094;</div>
            <div class="date">
                <h1>September</h1>
                <p>2023</p>
            </div>
            <div class="next">&#10095;</div>
        </div>
        <div class="weekdays">
            <div>Sun</div>
            <div>Mon</div>
            <div>Tue</div>
            <div>Wed</div>
            <div>Thu</div>
            <div>Fri</div>
            <div>Sat</div>
        </div>
        <div class="days">
            <div>1</div>
            <div>2</div>
            <div>3</div>
            <div class="active">4</div>
            <div>5</div>
            <div>6</div>
            <div>7</div>
            <div>8</div>
            <div>9</div>
            <div>10</div>
            <div>11</div>
            <div>12</div>
            <div>13</div>
            <div>14</div>
            <div>15</div>
            <div>16</div>
            <div>17</div>
            <div>18</div>
            <div>19</div>
            <div>20</div>
            <div>21</div>
            <div>22</div>
            <div>23</div>
            <div>24</div>
            <div>25</div>
            <div>26</div>
            <div>27</div>
            <div>28</div>
            <div>29</div>
            <div>30</div>
        </div>
    </div>
    </div>
  </template>
  
  <script>
  import VueMeetingSelector from 'vue-meeting-selector';
  export default {
    props: {
    doctorId: {
      type: Number,
      required: true
    } 
    } , 
     data() { 
      return {
        doctor : [],
    }
  },
  mounted () {
    fetch(`http://localhost:3000/doctors/${this.doctorId}`)
    .then(res => res.json())
    .then(data => this.doctor = data)
    .catch(err => console.log(err));
  },
}
</script>
<style scoped>
body {
    font-family: Arial, sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    margin: 0;
    background-color: #f4f4f4;
}

.calendar {
    width: 350px;
    background-color: #fff;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    overflow: hidden;
    margin-top: 30px;
}

.month {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    background-color: #0E7490;
    color: #fff;
}

.month .prev, .month .next {
    cursor: pointer;
}

.month .date {
    text-align: center;
}

.weekdays, .days {
    display: flex;
    flex-wrap: wrap;
}

.weekdays div, .days div {
    width: 14.28%;
    text-align: center;
    padding: 10px 0;
}

.weekdays {
    background-color: #ddd;
}
.days .active {
    background-color: #0E7490;
    color: #fff;
    border-radius: 50%;
}
.days div {
    cursor: pointer;
    transition: background-color 0.3s;
}

.days div:hover {
    background-color: #f0f0f0;
}
.stars {
  font-size: 10px;
    float: right;
    vertical-align: middle;
    margin-top: 7px;
}
.content {
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
    width: 120%;
}
.doc-info {
    margin-left: 10px;
    width: 100%;
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