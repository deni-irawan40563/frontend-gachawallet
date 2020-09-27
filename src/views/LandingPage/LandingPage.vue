<template>
  <div class="container-fluid m-0 p-0">
    <Header />
    <About />
    <Patners />
    <Features />
    <Users />
    <Footer />
  </div>
</template>

<script>
import Header from '../../components/LandingPage/Header'
import About from '../../components/LandingPage/About'
import Patners from '../../components/LandingPage/Patners'
import Features from '../../components/LandingPage/Features'
import Users from '../../components/LandingPage/Users'
import Footer from '../../components/LandingPage/Footer'

export default {
  name: 'LandingPage',
  components: {
    Header,
    About,
    Patners,
    Features,
    Users,
    Footer
  }
}

</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Nunito+Sans&display=swap');

.container-fluid {
    font-family: 'Nunito Sans', sans-serif;
    overflow: hidden;
}

</style>
