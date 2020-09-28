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
import MainCardDash from '../../../components/MainPage/MainCardDash'
import ChartCard from '../../../components/MainPage/BarChart'
import TransactionHistoryDash from '../../../components/MainPage/TransactionHistoryDash'

export default {
  name: 'dasboard',
  components: {
    MainCardDash,
    ChartCard,
    TransactionHistoryDash
  }
}
</script>

<style scoped>

</style>
