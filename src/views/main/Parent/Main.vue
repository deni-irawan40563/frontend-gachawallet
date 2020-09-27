<template>
  <div>
    <MainNavbar />
    <div class="container-fluid">
      <div class="row">
        <MainSidebar class="h"/>
        <div class="container-main mt-4 border rounded">
          <router-view />
        </div>
      </div>
    </div>
    <Footer />
  </div>
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
</style>
