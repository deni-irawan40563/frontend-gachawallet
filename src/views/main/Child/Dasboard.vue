<template>
  <div>
      <router-view />
      <h1 class="mx-auto">INI DASHBOARD</h1>
      <MainCardDash />
  </div>
</template>

<script>
import MainCardDash from '../../../components/MainPage/MainCardDash'

export default {
  name: 'dasboard',
  components: {
    MainCardDash
  }
}
</script>

<style>

</style>
