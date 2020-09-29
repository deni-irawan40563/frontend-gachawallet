<template>
  <b-row>
<!-- bagian kiri halaman untuk banner yg warna biru -->
      <b-col cols="6" class="backgroud">
            <SideBarAuth /> <!-- sidebarAuth ada di folder src/components/SideBarAuth.vue -->
      </b-col>
<!-- bagian sebelah kanan untuk form isian -->
      <b-col cols="6" class="bg-white responsive">
          <b-container class="mt-5 margin">
                <h2 class="font-h2">
                    Secure Your Account, Your Wallet,<br>
                    and Your Data With 6 Digits PIN<br>
                    That You Created Yourself.
                </h2>
                <p class="font-p">
                    Create 6 digits pin to secure all your money and your data in<br>
                    Zwallet app. Keep it secret and don’t tell anyone about your<br>
                    Zwallet account password and the PIN.
                </p>
                <EnterPin /> <!--Bagian form Create Pin mengandung komponent dari form pin-->
            </b-container>
      </b-col>
  </b-row>
</template>

<script>
import SideBarAuth from '../../components/AuthPage/Global/SideBarAuth'
import EnterPin from '../../components/AuthPage/EnterPin'

export default {
  name: 'CreatePin',
  components: {
    SideBarAuth,
    EnterPin
  }
}
</script>

<style scoped>
.backgroud {
    background-color: #6379F4;
}
.font-h2 {
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 33px;
    color: #3A3D42;
}
.font-p {
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 30px;
    color: rgba(58, 61, 66, 0.6);
}

@media (max-width: 768px) {
  .backgroud {
    min-width: 160px;
  }
}

@media (max-width: 576px) {
  .backgroud {
    visibility: hidden;
  }
  .responsive {
    position: absolute;
    min-width: 570px !important;
    height: 100%;
    justify-items: center;
  }
  .margin {
    margin-left: 100px;
  }
}
</style>
