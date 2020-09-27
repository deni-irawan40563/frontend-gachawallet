<template>
  <b-row>
<!-- bagian kiri halaman untuk banner yg warna biru -->
      <b-col cols="6" class="backgroud">
            <SideBarAuth /> <!-- sidebarAuth ada di folder src/components/SideBarAuth.vue -->
      </b-col>
<!-- bagian sebelah kanan untuk form isian -->
      <b-col cols="6" class="bg-white">
          <b-container class="mt-5">
                <h2 class="font-h2">
                    Did You Forgot Your Password?<br>
                    Don’t Worry, You Can Reset Your<br>
                    Password In a Minutes.
                </h2>
                <p class="font-p">
                    To reset your password, you must type your e-mail and we<br>
                    will send a link to your email and you will be directed to the<br>
                    reset password screens.
                </p>
                <FormChangePass /> <!--Bagian form Change Password mengandung komponent dari form password sampai buttom-->
            </b-container>
      </b-col>
  </b-row>
</template>

<script>
import SideBarAuth from '../../components/AuthPage/Global/SideBarAuth'
import FormChangePass from '../../components/AuthPage/FormChangePass'
export default {
  name: 'ResetPassword',
  components: {
    SideBarAuth,
    FormChangePass
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
</style>
