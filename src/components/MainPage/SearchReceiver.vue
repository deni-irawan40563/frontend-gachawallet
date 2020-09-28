<template>
  <div class="mt-2 bg-white h overflow-auto">

<!-- ini ke bawah tinggal di hapus aja sisanya tinggal di looping -->
        <ul class="list-group card-style pt-3 pb-3 mb-5">
            <!-- ini jangan di looping ini untuk text yang di atas -->
            <div class="ml-1 pb-4 row">
                <h4 class="col-12 ml-2">Search Receiver</h4>
                <b-input-group class="col-12 pl-5 ml-n4">
                    <b-input-group-prepend>
                        <b-button class="bg-light border-0"><b-icon icon="search" variant="secondary"></b-icon></b-button>
                    </b-input-group-prepend>
                    <b-form-input v-model="text" placeholder="Search receiver here" class="bg-light border-0"></b-form-input>
                </b-input-group>
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
                <Collapse /> <!-- handle collapse import dari component CobaCollapse -->
            </li>
<!-- sampai ini aja  -->

            <li class="list-group-item border-0 mt-3 list-style ml-4 mr-4">
                <b-card no-body class="overflow-hidden border-0">
                    <b-row no-gutters>
                    <b-col md="1">
                        <b-card-img src="https://media.suara.com/pictures/970x544/2019/11/27/96566-maria-ozawa.jpg" class="rounded style-img mt-3 ml-3"></b-card-img>
                    </b-col>
                    <b-col md="6">
                        <b-card-body>
                        <b-card-text>
                            <p class="mb-n1 style-p">Maria Ozawa</p>
                            <span class="text-muted style-span">+62 812-4343-6731</span>
                        </b-card-text>
                        </b-card-body>
                    </b-col>
                    </b-row>
                </b-card>
            </li>

            <li class="list-group-item border-0 mt-3 list-style ml-4 mr-4">
                <b-card no-body class="overflow-hidden border-0">
                    <b-row no-gutters>
                    <b-col md="1">
                        <b-card-img src="https://4.bp.blogspot.com/-ObDOlXWk5hA/WMT5_3LM9tI/AAAAAAAANto/8jt5asPvvs0UX_Luu76Qai1lvjOae_hYgCLcB/s1600/s%2B%252813%2529.jpg" class="rounded style-img mt-3 ml-3"></b-card-img>
                    </b-col>
                    <b-col md="6">
                        <b-card-body>
                        <b-card-text>
                            <p class="mb-n1 style-p">Momoka Nishina</p>
                            <span class="text-muted style-span">+62 811-3452-5252</span>
                        </b-card-text>
                        </b-card-body>
                    </b-col>
                    </b-row>
                </b-card>
            </li>

            <li class="list-group-item border-0 mt-3 list-style ml-4 mr-4">
                <b-card no-body class="overflow-hidden border-0">
                    <b-row no-gutters>
                    <b-col md="1">
                        <b-card-img src="https://ae01.alicdn.com/kf/HTB1SOJTaq61gK0jSZFlq6xDKFXaA/Three-Ratels-FTZ-7-20x10-6cm-xHamster-Logo-Vinyl-Window-Car-Sticker-Car-styling-Decal.jpg" class="rounded style-img mt-3 ml-3"></b-card-img>
                    </b-col>
                    <b-col md="6">
                        <b-card-body>
                        <b-card-text>
                            <p class="mb-n1 style-p">Xhamter</p>
                            <span class="text-muted style-span">+62 810-4224-4613</span>
                        </b-card-text>
                        </b-card-body>
                    </b-col>
                    </b-row>
                </b-card>
            </li>

            <li class="list-group-item border-0 mt-3 list-style ml-4 mr-4">
                <b-card no-body class="overflow-hidden border-0">
                    <b-row no-gutters>
                    <b-col md="1">
                        <b-card-img src="https://ae01.alicdn.com/kf/HTB1SOJTaq61gK0jSZFlq6xDKFXaA/Three-Ratels-FTZ-7-20x10-6cm-xHamster-Logo-Vinyl-Window-Car-Sticker-Car-styling-Decal.jpg" class="rounded style-img mt-3 ml-3"></b-card-img>
                    </b-col>
                    <b-col md="6">
                        <b-card-body>
                        <b-card-text>
                            <p class="mb-n1 style-p">Xhamter</p>
                            <span class="text-muted style-span">+62 810-4224-4613</span>
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
import Collapse from '../MainPage/CobaCollapse'
export default {
  name: 'SearchReceiver',
  components: {
    Collapse
  }
}
</script>

<style>
.h {
    max-height: 680px;
}
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
.list-style {
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.05);
    border-radius: 10px;
}
</style>
