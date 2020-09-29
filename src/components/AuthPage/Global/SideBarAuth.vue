<!-- komponent side bar auth ini adalah component yang mengandung sytling untuk sidebar yang ada di samping semua halaman di folder auth -->
<template>
  <div class="text-center backgroud">
      <h4 class="text-white text-left ml-5 mt-3">Gacha Wallet</h4>
      <img src="../../../assets/hero-image-auth.png" class="responsive">
      <b-container class="res text-white text-left pl-5 pr-5 ml-5">
            <h2 class="font-weight-bold h2-size">App that Covering Banking Needs.</h2>
            <p class="text-justify font-weight-lighter p-size">Zwallet is an application that focussing in banking needs for all users<br>
                in the world. Always updated and always following world trends.<br>
                5000+ users registered in Zwallet everyday with worldwide<br>
                users coverage.
            </p>
      </b-container>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.backgroud {
    background-image: url('../../../assets/backgroud-sideBar-auth.svg');
    background-repeat: no-repeat;
    background-size: cover;
}
.p-size {
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 23px;
    color: rgba(255, 255, 255, 0.8);
}
.h2-size {
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 33px;
}
 .responsive {
  width: 100%;
  height: auto;
 }

@media (max-width: 768px) {
 .backgroud {
     min-height: 1024px;
 }
 .res {
     position: static;
     justify-items: end;
     justify-content: end;
     justify-self: end;
     padding-left: 0 !important;
     margin-left: 0;
 }
}
</style>
