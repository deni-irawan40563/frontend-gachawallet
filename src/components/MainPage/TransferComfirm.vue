<template>
  <div class="mt-4 ml-5 bg-white">

<!-- ini ke bawah tinggal di hapus aja sisanya tinggal di looping -->
        <ul class="list-group w-75 card-style pt-5 pb-5">
            <!-- ini jangan di looping ini untuk text yang di atas -->
            <div class="ml-2 pb-2 row">
                <h4 class="col-8">Transfer To</h4>
            </div>
    <!-- sampai sini aja -->

            <li class="list-group-item border-0 mt-3 list-style ml-4 mr-4" v-b-toggle.collapse-1>
                <b-card no-body class="overflow-hidden border-0">
                    <b-row no-gutters>
                    <b-col md="1">
                        <b-card-img src="https://nywp.b-cdn.net/wp-content/uploads/2019/04/image-bintang-porno-sora-aoi-siarkan-langsung-kelahiran-bayinya.jpeg" class="rounded style-img mt-3 ml-3"></b-card-img>
                    </b-col>
                    <b-col md="6">
                        <b-card-body>
                        <b-card-text>
                            <p class="mb-n1 style-p">Sora Aoi</p>
                            <span class="text-muted style-span">+62 813-8492-9994</span>
                        </b-card-text>
                        </b-card-body>
                    </b-col>
                    </b-row>
                </b-card>
            </li>
<!-- sampai ini aja  -->
            <div class="ml-2 mt-4 row">
                <h4 class="col-8">Details</h4>
            </div>
<!-- detail section -->
            <li class="list-group-item border-0 mt-3 list-style ml-4 mr-4">
                <b-card no-body class="overflow-hidden border-0">
                    <b-row no-gutters>
                        <b-col md="6">
                            <b-card-body>
                                <b-card-text>
                                    <p class="mb-2">Amount</p>
                                    <h6 class="font-weight-bold">Rp100.000</h6>
                                </b-card-text>
                            </b-card-body>
                        </b-col>
                    </b-row>
                </b-card>
            </li>
            <li class="list-group-item border-0 mt-3 list-style ml-4 mr-4">
                <b-card no-body class="overflow-hidden border-0">
                    <b-row no-gutters>
                        <b-col md="6">
                            <b-card-body>
                                <b-card-text>
                                    <p class="mb-2">Balance Left</p>
                                    <h6 class="font-weight-bold">Rp20.000</h6>
                                </b-card-text>
                            </b-card-body>
                        </b-col>
                    </b-row>
                </b-card>
            </li>
            <li class="list-group-item border-0 mt-3 list-style ml-4 mr-4">
                <b-card no-body class="overflow-hidden border-0">
                    <b-row no-gutters>
                        <b-col md="6">
                            <b-card-body>
                                <b-card-text>
                                    <p class="mb-2">Date & Time</p>
                                    <h6 class="font-weight-bold">May 11, 2020 - 12.20</h6>
                                </b-card-text>
                            </b-card-body>
                        </b-col>
                    </b-row>
                </b-card>
            </li>
            <li class="list-group-item border-0 mt-3 list-style ml-4 mr-4">
                <b-card no-body class="overflow-hidden border-0">
                    <b-row no-gutters>
                        <b-col md="6">
                            <b-card-body>
                                <b-card-text>
                                    <p class="mb-2">Notes</p>
                                    <h6 class="font-weight-bold">For buying some socks</h6>
                                </b-card-text>
                            </b-card-body>
                        </b-col>
                    </b-row>
                </b-card>
            </li>
            <div class="text-right mr-4">
                <b-buttom class="btn btn-lg btn-primary mt-5 rounded-lg">Continue</b-buttom>
            </div>
        </ul>
  </div>
</template>

<script>
export default {
  name: 'tranfercomfirm'
}
</script>

<style scoped>
.card-style {
    background: #FFFFFF;
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.05);
    border-radius: 25px;
}
</style>
