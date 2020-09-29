<template>
  <div class="container-fluid">
      <div class="container">
          <h1 class="font-weight-bolder text-left mt-5">Gacha Wallet</h1>
          <div class="text-left mt-5 mb-5 pb-5"><h6>Simplify financial and saving needs and saving much time in banking needs with single app.</h6></div>
          <hr>
          <div class="row justify-content-between tab">
              <div class="col-6 text-left"><h6>2020 Gacha Wallet. All right reserved</h6></div>
              <div class="col-4 size"><h6>+62 5637 8882 9901</h6></div>
              <div class="col-2"><h6>gachawallet@gmail.com</h6></div>
          </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style scoped>
.container-fluid {
    height: 400px;
    background-color: #6379F4;

    color: white;
}
hr {
  border: 0;
  border-top: 1px solid #ffffff;
  text-align: center;
}

@media (max-width: 768px) {
  .tab {
    width: 600px;
  }
  .size {
    align-content: space-around;
  }
}

@media (max-width: 576px) {
  h1 {
    font-size: 30px;
  }
  .tab {
    display: flex;
    flex-direction: column !important;
  }
}
</style>
