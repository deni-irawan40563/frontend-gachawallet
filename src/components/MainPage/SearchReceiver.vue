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
                    <b-form-input v-model="search" @keyup.enter="handleSearch" placeholder="Search receiver here" class="bg-light border-0"></b-form-input>
                </b-input-group>
            </div>
    <!-- sampai sini aja -->
            <div v-for="user in allPhoneUser" :key="user.id">
                <div v-if="user.priority === '1' && user.idUser !== Number(userId)">
                    <li class="list-group-item border-0 mt-3 list-style ml-4 mr-4">
                    <!-- <li class="list-group-item border-0 mt-3 list-style ml-4 mr-4" v-b-toggle.collapse-1> -->
                        <b-card no-body class="overflow-hidden border-0" @click="handleShow">
                            <b-row no-gutters>
                            <b-col md="1">
                                <b-card-img :src="user.image" class="rounded style-img mt-3 ml-3"></b-card-img>
                            </b-col>
                            <b-col md="6">
                                <b-card-body>
                                <b-card-text>
                                    <p v-if="user.firstName" class="mb-n1 style-p">{{user.firstName}} {{user.lastName}}</p>
                                    <p v-else class="mb-n1 style-p">{{user.username}}</p>
                                    <span class="text-muted style-span">+{{user.phoneNumber}}</span>
                                </b-card-text>
                                </b-card-body>
                            </b-col>
                            </b-row>
                        </b-card>
                        <Collapse v-if="show" :idOther='user.idUser' /> <!-- handle collapse import dari component CobaCollapse -->
                    </li>
                </div>
            </div>
<!-- sampai ini aja  -->
        </ul>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import Collapse from '../MainPage/CobaCollapse'
export default {
  name: 'SearchReceiver',
  data () {
    return {
      show: false,
      search: ''
    }
  },
  components: {
    Collapse
  },
  computed: {
    ...mapGetters({
      allPhoneUser: 'allPhoneUser',
      userId: 'userId'
    })
  },
  methods: {
    ...mapActions(['getAllUser']),
    ...mapActions(['searchPhoneUser']),

    handleShow () {
      if (this.show === false) {
        this.show = true
      } else {
        this.show = false
      }
    },

    handleSearch () {
      this.searchPhoneUser(this.search)
        .then((res) => {
          console.log(res)
        })
    }
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
