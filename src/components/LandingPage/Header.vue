<template>
  <div class="container-fluid m-0 p-0">
      <div class="background mt-0 p-0">
        <div class="col-6 col-md-12">
        </div>
        <div class="hp ml-5"></div>
      </div>
      <div class="container border-top">
      <div class="row mt-5">
          <div class="col-12 align-middle mt-5">
                <router-link to="/signup"><button class="btn btn-light rounded">Sign Up</button></router-link>
               <router-link to="/login"><button class="btn btn-light rounded mr-5">Login</button></router-link>
              <div class="row"><h5><span>Gacha Wallet</span></h5></div>
              <div class="row mt-5 mr-5 text-left tab"><h1><b>Awesome App For Saving <span>Time.</span></b></h1></div>
              <div class="row mt-3 mr-5 text-left tab"><h6>We bring you a mobile app for banking problems that oftenly wasting much of your times.</h6></div>
          </div>
      </div>
  </div>
  </div>
</template>

<script>
export default {
  name: 'Header'

}
</script>

<style scoped>
.container-fluid {
    height: 850px;
    background-color: #FFFFFF;
}
.background {
    width: 550px;
    height: 558px;
    float: right;

    background-image: url('../../assets/Landing/Mask Group.png');
    background-size: cover;
}
.hp {
    width: 400px;
    height: 600px;

    background-image: url('../../assets/Landing/png-phone.png');
    background-size: cover;
}
.container {
    position: relative;
}
.btn {
    float: right;
}
.row {
    position: relative;
}
span {
    color: #6379F4;
}

.text-box1 { width: 490px; }
h1 {
    /* font-weight: 800; */
    font-size: 60px;
    line-height: 93px;
}

@media (max-width: 768px) {
  .container-fluid {
    min-height: 1024px;
  }
  .background {
    width: 850px;
    height: 558px;
    margin-top: 0;
    float: none;
  }

  .tab {
      justify-content: center;
      margin: 30px;
  }
}

@media (max-width: 576px) {
  .background {
      height: 470px;
  }
  .hp {
      width: 300px;
      height: 600px;
  }
  .btn {
      margin: 2px !important;
  }
  h1 {
      font-size: 40px;
      line-height: 40px;
  }
}
</style>
