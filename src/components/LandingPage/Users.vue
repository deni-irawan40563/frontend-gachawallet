<template>
  <div class="container">
      <div class="head mt-5 pt-5">
          <h1 class="font-weight-bolder">What Users are <span>Saying</span></h1>
          <div class="text mt-4"><h6>We have some great from the application and it's totally free to use by all users around the world.</h6></div>
      </div>
      <div class="row mt-5 justify-content-between">
          <div class="col m-3 p-3 card border rounded">
              <div class="profile sherina"></div>
              <div class="name mt-5"><h5 class="font-weight-bolder">Sherina Chaw</h5></div>
              <div class="quote mt-3"><h6>"I use this app since 2 years ago and this is the best app that i've ever use in my entire life"</h6></div>
          </div>
          <div class="col m-3 p-3 card border">
              <div class="profile jessica"></div>
              <div class="name mt-5"><h5 class="font-weight-bolder">Jessica Mera</h5></div>
              <div class="quote mt-3"><h6>"I use Gacha Wallet to manage all financial needs. it's super easy to use and it's 100% free app"</h6></div>
          </div>
          <div class="col m-3 p-3 card border">
              <div class="profile robert"></div>
              <div class="name mt-5"><h5 class="font-weight-bolder">Robert Chandler</h5></div>
              <div class="quote mt-3"><h6>"Since i'm using this app. i'm not going to move to another similiar app. thank you Gacha Wallet"</h6></div>
          </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'Users'
}
</script>

<style>
.container {
    height: 600px;
}

.head {
    display: flex;
    flex-direction: column;
    align-items: center;
}
span {
    color: #6379F4;
}
.text {
    width: 430px;
}

.card {
    width: 900px;
    align-items: center;
    border-radius: 10px;
}
.profile {
    width: 80px;
    height: 80px;
    background-size: cover;
}
.sherina { background-image: url('../../assets/Landing/1.png');}
.jessica { background-image: url('../../assets/Landing/2.png'); }
.robert { background-image: url('../../assets/Landing/Rectangle 25.png');}
</style>
