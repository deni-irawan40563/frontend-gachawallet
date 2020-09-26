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

<script>
import MainCardDash from '../components/MainCardDash'
import TransactionHistoryDash from '../components/TransactionHistoryDash'
import ChartCard from '../components/ChartCard'
import SearchReceiver from '../components/SearchReceiver'
import TopUp from '../components/TopUp'
import TransferComfirm from '../components/TransferComfirm'
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
