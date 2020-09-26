<template>
 <div class="container m-4">
      <div class="personal mb-5">
          <div class="title"><h4>Change PIN</h4></div>
          <div class="text"><h6 class="text-left">Enter your current 6 digits Gacha Wallet PIN below to continue to the next steps.</h6></div>
      </div>
      <div class="row justify-content-center m-2">
        <input type="number" name="" id="">
        <input type="number" name="" id="">
        <input type="number" name="" id="">
        <input type="number" name="" id="">
      </div>
      <div class="row justify-content-center">
        <button type="button" class="btn btn-light w-25">Continue</button>
      </div>
  </div>
</template>

<script>
export default {
  name: 'ChangePIN'
}
</script>

<style scoped>
input {
  width: 50px;
  height: 50px;
  margin: 15px;
  border-radius: 10px;
}
</style>
