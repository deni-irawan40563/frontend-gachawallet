<template>
  <b-row class="mr-auto">
    <b-col>
      <MainCardDash />
    </b-col>
    <div class="w-100"></div>
    <b-col>
      <ChartCard />
    </b-col>
    <b-col>
      <TransactionHistoryDash />
    </b-col>
  </b-row>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import MainCardDash from '../../../components/MainPage/MainCardDash'
import ChartCard from '../../../components/MainPage/BarChart'
import TransactionHistoryDash from '../../../components/MainPage/TransactionHistoryDash'

export default {
  name: 'dasboard',
  components: {
<<<<<<< HEAD
    MainCardDash,
    ChartCard,
    TransactionHistoryDash
=======
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
>>>>>>> integrasi
  }
}
</script>

<style scoped>

</style>
