<template>
    <b-container class="bg-white ml-0 mt-4 h">
            <b-list-group class="border-0 pt-3">
                <router-link to="/dasboard" class="text-dark"><b-list-group-item class="border-0 mt-3" @click="handleDasboard"><b-icon icon="grid" variant="secondary" font-scale="1" class="mr-2"></b-icon>Dashboard</b-list-group-item></router-link>
                <router-link to="/transfer" class="text-dark"><b-list-group-item class="border-0 mt-3" @click="handleTransfer"><b-icon icon="arrow-up" variant="secondary" font-scale="1" class="mr-2"></b-icon>Transfer</b-list-group-item></router-link>
                <router-link to="/topup" class="text-dark"><b-list-group-item class="border-0 mt-3"><b-icon icon="plus" variant="secondary" font-scale="1" class="mr-2"></b-icon>Top Up</b-list-group-item></router-link>
                <router-link to="/profile" class="text-dark"><b-list-group-item class="border-0 mt-3"><b-icon icon="person" variant="secondary" font-scale="1" class="mr-2"></b-icon>Profile</b-list-group-item></router-link>
            </b-list-group>
            <b-list-group class="handle-buttom">
                <router-link to="/login" class="text-dark"><b-list-group-item class="border-0" @click="handleLogout"><b-icon icon="box-arrow-right" variant="secondary" font-scale="1" class="mr-2"></b-icon>Logout</b-list-group-item></router-link>
            </b-list-group>
    </b-container>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'mainsidebar',
  computed: {
    ...mapGetters({
      userId: 'userId'
    })
  },
  methods: {
    ...mapActions(['logout']),
    ...mapActions(['getUserId']),
    ...mapActions(['getHistoryUser']),
    ...mapActions(['getAllPhoneUser']),

    handleLogout () {
      this.logout().then((res) => {
      })
    },
    handleDasboard () {
      this.getUserId(this.userId)
      this.getHistoryUser(this.userId)
    },
    handleTransfer () {
      this.getAllPhoneUser()
    }
  }
}
</script>

<style scoped>
.h {
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.05);
    border-radius: 25px;
}
ul li .style {
    text-decoration: none;
}
.handle-buttom {
    margin-bottom: 0;
}

</style>
