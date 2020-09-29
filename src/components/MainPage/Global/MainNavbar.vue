<template>
    <div>
        <nav class="navbar navbar-light bg-white rounded-style">
            <span class="navbar-brand mb-0 h1 font-weight-bold text-primary pb-3 pt-3 brand-style">Gacha Wallet</span>
            <div class="mr-5">
                <div class="mr-5 row">
                        <img v-if="userImage" :src="userImage" class="d-inline-block align-top style-img mr-3">
                        <img v-else src="../../../assets/Profile/pp.png" class="d-inline-block align-top style-img mr-3">
                        <div class="text-style dropdown">
                        <div v-if="name" class="font-weight-bold">{{name}}</div>
                    <!-- +62 8139 3877 7946 -->
                    <router-link to="/managePhoneNumber" class="text-dark">{{phoneNumber}}</router-link>
<!-- ini bagian untuk notifikasi dropdown transaksi yang dilakukan -->
                    <a class="dropdown-toggle" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                        <b-icon icon="bell" variant="secondary" font-scale="2" class="ml-5 mt-n2"></b-icon> <!-- dropdown belum jalan -->
                    </a>
                    <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
<!-- ini adalah untuk styling jika notifikasinya ada tranfer atau segala transaksi yang menyebabkan saldo kita berkurang -->
                        <div class="border-0">
                                <b-row class="p-3" no-gutters>
                                    <div class="col-3">
                                        <b-icon icon="arrow-up" variant="danger"></b-icon>
                                    </div>
                                    <div class="col-9">
                                        <small class="text-muted">Transfer</small>
                                        <p class="font-weight-bold">-Rp20.000</p>
                                    </div>
                                </b-row>
                        </div>
<!-- ini adalah untuk styling jika notifikasinya ada Top Up atau segala transaksi yang menyebabkan saldo kita bertambah -->                             <div class="border-0">
                                <b-row class="p-3" no-gutters>
                                    <div class="col-3">
                                        <b-icon icon="arrow-down" variant="success"></b-icon>
                                    </div>
                                    <div class="col-9">
                                        <small class="text-muted">Top Up</small>
                                        <p class="font-weight-bold">+Rp50.000</p>
                                    </div>
                                </b-row>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </nav>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'mainnavbar',
  computed: {
    ...mapGetters({
      user: 'user',
      name: 'name',
      userImage: 'userImage',
      phoneNumber: 'phoneNumber'
    })
  }
}
</script>

<style scoped>
.rounded-style {
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.05);
    border-radius: 25px;
}
.brand-style {
    font-size: 29px;
    line-height: 40px;
}
.style-img {
    width: 52px;
    height: 52px;
    object-fit: cover;
    border-radius: 10px;
}
.text-style {
    font-size: 13px;
    line-height: 24px;
}
@media (max-width: 576px) {
    .logo {
        display: none;
    }
    .margin {
        margin-left: 20px;
    }
}
</style>
