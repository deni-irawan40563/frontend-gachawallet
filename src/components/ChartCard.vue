<template>
    <div class="card-style mt-4">
      <b-row cols="12" class="pt-4">
        <b-col cols="5" class="ml-4">
          <b-icon icon="arrow-down" variant="success" class="h4"></b-icon>
          <p>Income</p>
          <h5 class="font-weight-bold">Rp2.120.000</h5>
        </b-col>
        <b-col cols="5" class="ml-auto">
          <b-icon icon="arrow-up" variant="danger" class="h4"></b-icon>
          <p>Expense</p>
          <h5 class="font-weight-bold">Rp1.560.000</h5>
        </b-col>
      </b-row>
      <BarChart class="p-3" />
    </div>
</template>

<script>
import BarChart from '../components/BarChart'
export default {
  name: 'cardbar',
  components: {
    BarChart
  }
}
</script>

<style>
.card-style {
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.05);
  border-radius: 25px;
}
</style>
