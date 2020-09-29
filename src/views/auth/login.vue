<template>
  <b-row>
<!-- bagian kiri halaman untuk banner yg warna biru -->
      <b-col md="6" sm="12" class="backgroud">
            <SideBarAuth /> <!-- sidebarAuth ada di folder src/components/SideBarAuth.vue -->
      </b-col>
<!-- bagian sebelah kanan untuk form isian -->
      <b-col md="6" sm="12" class="bg-white responsive">
          <b-container class="mt-5 margin">
                <h2 class="font-h2">
                    Start Accessing Banking Needs<br>
                    With All Devices and All Platforms<br>
                    With 30.000+ Users
                </h2>
                <p class="font-p">
                    Transfering money is eassier than ever, you can access<br>
                     Zwallet wherever you are. Desktop, laptop, mobile phone?<br>
                    we cover all of that for you!
                </p>
                <FormLogin /> <!--Bagian form login mengandung komponent dari form email sampai link ke sign up-->
            </b-container>
      </b-col>
  </b-row>
</template>

<script>
import SideBarAuth from '../../components/AuthPage/Global/SideBarAuth'
import FormLogin from '../../components/AuthPage/FormLogin'

export default {
  name: 'Login',
  components: {
    SideBarAuth,
    FormLogin
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
