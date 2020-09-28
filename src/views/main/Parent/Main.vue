<template>
  <b-row align-v="center">
    <b-col>
        <MainNavbar class="col-12" />
    </b-col>
    <div class="w-100"></div>
    <b-col>
      <b-row align-v="center">
        <b-col md="3" class="side">
          <MainSidebar/>
        </b-col>
        <b-col md="9" sm="12">
          <router-view/>
        </b-col>
      </b-row>
    </b-col>
    <div class="w-100"></div>
    <b-col>
        <Footer class="col-12"/>
    </b-col>
  </b-row>
</template>

<script>
import MainNavbar from '../../../components/MainPage/Global/MainNavbar'
import MainSidebar from '../../../components/MainPage/Global/MainSidebar'
import Footer from '../../../components/MainPage/Global/Footer'

export default {
  name: 'main',
  components: {
    MainNavbar,
    MainSidebar,
    Footer
  }
}
</script>

<style scoped>
.h {
  height: 600px;
}

.container-main {
  width: 900px;
  height: 600px;
}
@media (max-width: 576px) {
    .side {
        display: none;
    }
}
</style>
