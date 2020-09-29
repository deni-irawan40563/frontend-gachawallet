<template>
  <div class="mt-2 bg-white">

<!-- ini ke bawah tinggal di hapus aja sisanya tinggal di looping -->
        <ul class="list-group card-style pt-3 pb-2 scroll">
            <!-- ini jangan di looping ini untuk text yang di atas -->
            <div class="ml-2 pb-4 row">
                <h5 class="col-8">Transaction History</h5>
                <a href="/" class="col-4 text-center">See all</a>
            </div>
    <!-- sampai sini aja -->
            <div v-for="history in historyUser" :key="history.id">
                <li v-if="history.transaction === 'Transfer'" class="list-group-item border-0 mt-n4">
                    <b-card no-body class="overflow-hidden border-0">
                        <b-row no-gutters>
                        <b-col md="2">
                            <b-card-img v-if="history.image" :src="history.image" class="rounded style-img mt-3 ml-3"></b-card-img>
                            <b-card-img v-else src="../../assets/Profile/pp.png" class="rounded style-img mt-3 ml-3"></b-card-img>
                        </b-col>
                        <b-col md="6">
                            <b-card-body>
                            <b-card-text>
                                <p v-if="history.firstName" class="mb-n1 style-p">{{history.firstName}} {{history.lastName}}</p>
                                <p v-else class="mb-n1 style-p">{{history.username}}</p>
                                <span class="text-muted style-span">Transfer</span>
                            </b-card-text>
                            </b-card-body>
                        </b-col>
                        <b-col md="4 mt-4">
                            <h5 class="style-h5">+Rp{{history.amount}}</h5>
                        </b-col>
                        </b-row>
                    </b-card>
                </li>

                <li  v-if="history.transaction === 'Subcription'" class="list-group-item border-0 mt-n4">
                    <b-card no-body class="overflow-hidden border-0">
                        <b-row no-gutters>
                        <b-col md="2">
                            <b-card-img v-if="history.image" :src="history.image" class="rounded style-img mt-3 ml-3"></b-card-img>
                            <b-card-img v-else src="../../assets/Profile/pp.png" class="rounded style-img mt-3 ml-3"></b-card-img>
                        </b-col>
                        <b-col md="6">
                            <b-card-body>
                            <b-card-text>
                                <p v-if="history.firstName" class="mb-n1 style-p">{{history.firstName}} {{history.lastName}}</p>
                                <p v-else class="mb-n1 style-p">{{history.username}}</p>
                                <span class="text-muted style-span">Subscription</span>
                            </b-card-text>
                            </b-card-body>
                        </b-col>
                        <b-col md="4 mt-4">
                            <h5 class="style-h52">-Rp{{history.amount}}</h5>
                        </b-col>
                        </b-row>
                    </b-card>
                </li>
            </div>

        </ul>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'TransactionHistoryDash',
  computed: {
    ...mapGetters({
      historyUser: 'historyUser'
    })
  }
}
</script>

<style scoped>
.style-img {
    width: 52px;
    height: 52px;
    object-fit: cover;
    border-radius: 10px;
}
.style-p {
    font-weight: bold;
    font-size: 16px;
    line-height: 22px;
    color: #4D4B57;
}
.style-span {
    font-weight: normal;
    font-size: 14px;
    line-height: 19px;
    color: #7A7886;
}
.style-h5 {
    font-weight: bold;
    font-size: 20px;
    line-height: 22px;
    text-align: right;
    color: #1EC15F;
}
.style-h52 {
    font-weight: bold;
    font-size: 20px;
    line-height: 22px;
    text-align: right;
    color: #FF5B37;
}
.card-style {
    background: #FFFFFF;
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.05);
    border-radius: 25px;
}

.scroll {
    height: 400px;
    overflow-y: scroll;
}

.scroll::-webkit-scrollbar {
    display: none;
}
</style>
