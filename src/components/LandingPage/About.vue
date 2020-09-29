<template>
  <div class="container-fluid">
      <div class="container">
        <h1 class="pt-5 mt-5 text-center font-weight-bold"><span>About</span> the Application.</h1>
        <div class="col-6 col-md-10">
            <h6 class="pt-3 text-center text-1">We have some great features from the application and it’s totally free to use by all users around the world.</h6>
        </div>
        <div class="flex-row mt-5 pt-5">
          <div class="col-sm-4 border m-1 card">
            <div class="icon call"></div>
            <div class="title mt-2"><h5 class="font-weight-bold">24/7 Support</h5></div>
            <div class="text1 mt-4 p-2"><h6>We have 24/7 contact support so you can contact us whenever you want and we will respond it</h6></div>
          </div>
          <div class="col-sm-4 border m-1 card">
            <div class="icon lock"></div>
            <div class="title mt-2"><h5 class="font-weight-bold">Data Privacy</h5></div>
            <div class="text1 mt-4 p-2"><h6>We make sure your data is safe in our database and will encrypt any data you submitted to us.</h6></div>
          </div>
          <div class="col-sm-4 border m-1 card">
            <div class="icon dl"></div>
            <div class="title mt-2"><h5 class="font-weight-bold">Easy Download</h5></div>
            <div class="text1 mt-4 p-2"><h6>Gacha Wallet is 100% totally free to use it's now available on Google Play Store and App Store</h6></div>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'About'
}
</script>

<style scoped>
.container-fluid {
    height: 700px;
    background-color: rgba(71, 58, 209, 0.06);
}

span {
    color: #6379F4;
}
h1 {
  font-size: 60px;
}

.text-1 {
  width: 500px;
  margin-left: 300px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  /* margin: 0 auto; */
}

.flex-row {
  width: 900px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: auto;
}
.card {
  width: 400px;
  height: 250px;
  border-radius: 10px;
  align-items: center;
}
.icon {
  width: 80px;
  height: 80px;
  background-size: cover;
}
.call { background-image: url('../../assets/Landing/call.png'); }
.lock { background-image:url('../../assets/Landing/lock.png');}
.dl { background-image: url('../../assets/Landing/download.png');}

@media (max-width: 768px) {
  .container {
    max-width: 768px;
  }

  .text-1 {
    margin-left: 100px;
  }

  .flex-row {
    width: 700px;
  }
}

@media (max-width: 576px) {
  .container-fluid {
    height: 900px;
  }
  .container {
    max-width: 576px;
  }
  h1 {
    font-size: 40px;
  }
  .text-1 {
    width: 300px;
    margin: 0px;
  }
  .flex-row {
    flex-direction: column !important;
  }
  .card {
    width: 280px;
    height: 150px;
  }
}
</style>
