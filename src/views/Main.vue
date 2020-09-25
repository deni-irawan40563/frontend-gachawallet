<template>
  <div>
    <MainNavbar />
    <MainSidebar class="h"/>
    <Footer />
  </div>
</template>

<script>
import MainNavbar from '../components/MainNavbar'
import MainSidebar from '../components/MainSidebar'
import Footer from '../components/Footer'

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
</style>
