<template>
  <header>
    <div class="head">
      <h2>DO <br> CS</h2>
      <font-awesome-icon icon="fa-regular fa-user" class="user"/>
    </div>
    <h1>Let's find you a doctor</h1>
    <div class="search">
      <input type="search" placeholder="Search">
      <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
    </div>
  </header>
</template>

<style scoped>
header {
  padding: 40px;
}

.head {
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
}
.head h2 {
  color: #0E7490;
  font-size: 27px;
  font-weight: bold;
}
.user {
  width: 15px;
  height: 15px;
  cursor: pointer;
  padding: 15px;
  background-color: #F3F4F6;
  border-radius: 40%;
}
header h1 {
  font-size: 20px;
  margin: 20px 0 20px 0;
}
.search {
position: relative;
padding: 0;
}
.search::before {
    content: "\1F50D";
    position: absolute;
    font-weight: 900;
    right: 15px;
    top: 50%;
    transform: translateY(-50%);
    font-size: 14px;
}


.search input {
    border: 1px  #ccc;
    border-radius: 10px;
    padding: 15px 20px;
    padding-left: 30px;
    width: 100%;
    transition: width 0.3s;
    background-color: #F3F4F6;
    font-size: 20px;
    color: #6B7280;
}
</style>