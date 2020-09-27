<template>
  <div class="container">
      <div class="text-patners text-left">
          <div class="title">
              <h1 class="font-weight-bold">100+ <span>Trusted</span> Patners.</h1>
          </div>
          <div class="text">
              <h5>We have reached global level and have 100+ brand patners around the globe.</h5>
          </div>
      </div>
      <div class="logo-patners">
          <div class="rows-logo">
            <div class="logo airbnb mt-4"></div>
            <div class="logo canon mt-4"></div>
            <div class="logo dell"></div>
          </div>
          <div class="rows-logo">
            <div class="logo microsoft"></div>
            <div class="logo dropbox"></div>
            <div class="logo hm"></div>
          </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'Patners'
}
</script>

<style scoped>
.container {
    height: 500px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}

.text-patners {
    display: flex;
    flex-direction: column;
    padding-top: 100px;
}
span {
    color: #6379F4;
}
.title {
    width: 400px;
}
h1 {
    font-size: 65px;
}

.text {
    width: 420px;
    margin-top: 20px;
}

.logo-patners {
    padding-top: 120px;
    width: 650px;
    height: 200px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}
.rows-logo {
    display: flex;
    flex-direction: row;
}
.logo {
    width: 250px;
    height: 90px;
    display: flex;
    background-size: 150px;
    background-repeat: no-repeat;
}
.airbnb { background-image: url('../../assets/Landing/logo 1.png');}
.canon { background-image: url('../../assets/Landing/g9.png');}
.dell { background-image: url('../../assets/Landing/dell.png'); background-size: 90px;}
.microsoft { background-image: url('../../assets/Landing/microsooft.png');}
.dropbox { background-image: url('../../assets/Landing/dropbox.png');}
.hm { background-image: url('../../assets/Landing/hm.png'); background-size: 100px;}
</style>
