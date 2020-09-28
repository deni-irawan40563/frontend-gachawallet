<template>
  <div>
      <MainCardDash />
        <b-row>
          <b-col cols="6">
              <TransactionHistoryDash />
          </b-col>
          <b-col cols="6">
              <ChartCard class=" w-75"/>
          </b-col>
          <b-col cols="12">
            <SearchReceiver />
          </b-col>
          <b-col cols="12">
            <TopUp />
          </b-col>
          <b-col cols="12">
            <TransferComfirm />
          </b-col>
        </b-row>
  </div>
</template>

<script scoped>
import MainCardDash from '../components/MainPage/MainCardDash'
import TransactionHistoryDash from '../components/MainPage/TransactionHistoryDash'
import ChartCard from '../components/MainPage/ChartCard'
import SearchReceiver from '../components/MainPage/SearchReceiver'
import TopUp from '../components/MainPage/TopUp'
import TransferComfirm from '../components/MainPage/TransferComfirm'
export default {
  name: 'cobacoba',
  components: {
    MainCardDash,
    TransactionHistoryDash,
    ChartCard,
    SearchReceiver,
    TopUp,
    TransferComfirm
  }
}
</script>

<style scoped>

</style>
