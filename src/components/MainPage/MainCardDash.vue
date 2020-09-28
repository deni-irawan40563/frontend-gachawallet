<template>
  <div>
    <div class="card w-75 mt-5 ml-5">
    <div class="card-body row">
        <div class="col-6">
            <p class="card-title style-p">Balance</p>
            <h3 class="card-text style-h3">Rp{{saldo}}</h3>
            <p class="card-title style-p">{{phoneNumber}}</p>
        </div>
        <div class="col-6 text-right mt-3">
            <button href="#" class="btn btn-primary buttom-style"><b-icon icon="arrow-up" class="icon-style"></b-icon>Transfer</button><br>
            <button href="#" class="btn btn-primary mt-3 buttom-style pr-3"><b-icon icon="plus" class="ml-1 icon-style"></b-icon>Top Up</button>
        </div>
    </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'maincarddash',
  computed: {
    ...mapGetters({
      saldo: 'saldo',
      phoneNumber: 'phoneNumber'
    })
  },
  methods: {
    ...mapActions(['getUserId'])
  }
}
</script>

<style scoped>
.buttom-style {
    font-weight: bold;
    font-size: 18px;
    line-height: 25px;
    background: rgba(255, 255, 255, 0.2);
    border: 1px solid #FFFFFF;
    box-sizing: border-box;
    border-radius: 10px;
}
.icon-style {
    width: 28px;
    height: 20px;
    left: 1130px;
    top: 297px;

}
.card {
    background: #6379F4;
    border-radius: 20px;
}
.style-p {
    font-size: 14px;
    line-height: 19px;
    color: #DFDCDC;
}
.style-h3 {
    font-style: normal;
    font-weight: bold;
    font-size: 40px;
    line-height: 55px;
    color: #FFFFFF;
}
</style>
