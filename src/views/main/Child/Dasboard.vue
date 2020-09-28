<template>
  <div>
      <router-view />
      <h1 class="mx-auto">INI DASHBOARD</h1>
      <MainCardDash />
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import MainCardDash from '../../../components/MainPage/MainCardDash'

export default {
  name: 'dasboard',
  components: {
    MainCardDash
  },
  computed: {
    ...mapGetters({
      userId: 'userId',
      saldo: 'saldo'
    })
  },
  methods: {
    ...mapActions(['getUserId'])
  }
}
</script>

<style>

</style>
