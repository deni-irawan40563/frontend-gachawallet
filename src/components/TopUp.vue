<template>
  <div class="mt-4 ml-5 bg-white">

<!-- ini ke bawah tinggal di hapus aja sisanya tinggal di looping -->
        <ul class="list-group w-75 card-style pt-5 pb-5">
            <!-- ini jangan di looping ini untuk text yang di atas -->
            <div class="ml-2 pb-4 row">
                <h4 class="col-12 ml-2 font-weight-bold">How To Top Up</h4>
            </div>
    <!-- sampai sini aja -->

            <li class="list-group-item border-0 mt-3 list-style ml-4 mr-4" v-b-toggle.collapse-1>
                <b-card no-body class="overflow-hidden border-0">
                    <b-row no-gutters>
                    <b-col md="1" class="mt-4 ml-4">
                        <h5>1</h5>
                    </b-col>
                    <b-col md="6">
                        <b-card-body>
                            <b-card-text class="text">
                                Go to the nearest ATM or you can use E-Banking.
                            </b-card-text>
                        </b-card-body>
                    </b-col>
                    </b-row>
                </b-card>
            </li>

            <li class="list-group-item border-0 mt-3 list-style ml-4 mr-4" v-b-toggle.collapse-1>
                <b-card no-body class="overflow-hidden border-0">
                    <b-row no-gutters>
                    <b-col md="1" class="mt-4 ml-4">
                        <h5>2</h5>
                    </b-col>
                    <b-col md="6">
                        <b-card-body>
                            <b-card-text class="text">
                                Type your security number on the ATM or E-Banking.
                            </b-card-text>
                        </b-card-body>
                    </b-col>
                    </b-row>
                </b-card>
            </li>
            <li class="list-group-item border-0 mt-3 list-style ml-4 mr-4" v-b-toggle.collapse-1>
                <b-card no-body class="overflow-hidden border-0">
                    <b-row no-gutters>
                    <b-col md="1" class="mt-4 ml-4">
                        <h5>3</h5>
                    </b-col>
                    <b-col md="6">
                        <b-card-body>
                            <b-card-text class="text">
                                Select “Transfer” in the menu
                            </b-card-text>
                        </b-card-body>
                    </b-col>
                    </b-row>
                </b-card>
            </li>
            <li class="list-group-item border-0 mt-3 list-style ml-4 mr-4" v-b-toggle.collapse-1>
                <b-card no-body class="overflow-hidden border-0">
                    <b-row no-gutters>
                    <b-col md="1" class="mt-4 ml-4">
                        <h5>4</h5>
                    </b-col>
                    <b-col md="6">
                        <b-card-body>
                            <b-card-text class="text">
                                Type the virtual account number that we provide you at the top.
                            </b-card-text>
                        </b-card-body>
                    </b-col>
                    </b-row>
                </b-card>
            </li>
            <li class="list-group-item border-0 mt-3 list-style ml-4 mr-4" v-b-toggle.collapse-1>
                <b-card no-body class="overflow-hidden border-0">
                    <b-row no-gutters>
                    <b-col md="1" class="mt-4 ml-4">
                        <h5>5</h5>
                    </b-col>
                    <b-col md="6">
                        <b-card-body>
                            <b-card-text class="text">
                                Type the amount of the money you want to top up.
                            </b-card-text>
                        </b-card-body>
                    </b-col>
                    </b-row>
                </b-card>
            </li>
            <li class="list-group-item border-0 mt-3 list-style ml-4 mr-4" v-b-toggle.collapse-1>
                <b-card no-body class="overflow-hidden border-0">
                    <b-row no-gutters>
                    <b-col md="1" class="mt-4 ml-4">
                        <h5>6</h5>
                    </b-col>
                    <b-col md="6">
                        <b-card-body>
                            <b-card-text class="text">
                                Read the summary details
                            </b-card-text>
                        </b-card-body>
                    </b-col>
                    </b-row>
                </b-card>
            </li>
            <li class="list-group-item border-0 mt-3 list-style ml-4 mr-4" v-b-toggle.collapse-1>
                <b-card no-body class="overflow-hidden border-0">
                    <b-row no-gutters>
                    <b-col md="1" class="mt-4 ml-4">
                        <h5>7</h5>
                    </b-col>
                    <b-col md="6">
                        <b-card-body>
                            <b-card-text class="text">
                                Press transfer / top up
                            </b-card-text>
                        </b-card-body>
                    </b-col>
                    </b-row>
                </b-card>
            </li>
            <li class="list-group-item border-0 mt-3 list-style ml-4 mr-4" v-b-toggle.collapse-1>
                <b-card no-body class="overflow-hidden border-0">
                    <b-row no-gutters>
                    <b-col md="1" class="mt-4 ml-4">
                        <h5>8</h5>
                    </b-col>
                    <b-col md="6">
                        <b-card-body>
                            <b-card-text class="text">
                                You can see your money in Zwallet within 3 hours.
                            </b-card-text>
                        </b-card-body>
                    </b-col>
                    </b-row>
                </b-card>
            </li>
        </ul>
  </div>
</template>

<script>
export default {
  name: 'SearchReceiver'
}
</script>

<style>
h5 {
    font-size: 18px;
    line-height: 25px;
    color: #6379F4;
}
.text {
    font-size: 16px;
    line-height: 27px;
    display: flex;
    align-items: center;
    color: #7A7886;
}
</style>
