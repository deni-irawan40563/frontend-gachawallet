<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
// ini bagian import vue-bootstrap
import Vue from 'vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
// sampai sini

export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Nunito Sans', sans-serif; /* import font nurito sans untuk link relnya ada di folder publik file index.html */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

</style>
