<template>
 <div class="container m-4">
      <div class="personal mb-5">
          <div class="title"><h4>Change PIN</h4></div>
          <div class="text"><h6 class="text-left">Enter your current 6 digits Gacha Wallet PIN below to continue to the next steps.</h6></div>
      </div>
      <div class="row justify-content-center m-2">
      <PincodeInput
      :length="6"
      v-model="code"
     placeholder=""
     />
      </div>
      <div class="input-wrapper">
  </div>
      <div class="row justify-content-center">
        <button type="button" class="btn btn-light w-25" @click="handleChangePIN">Continue</button>
      </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import PincodeInput from 'vue-pincode-input'
export default {
  name: 'ChangePIN',
  data () {
    return {
      code: ''
    }
  },
  components: {
    PincodeInput
  },
  computed: {
    ...mapGetters({
      userId: 'userId'
    })
  },
  methods: {
    ...mapActions(['changePIN']),

    handleChangePIN () {
      const data = {
        pin: this.code
      }
      const input = {
        id: this.userId,
        data: data
      }
      this.changePIN(input)
        .then((res) => {
          alert(res.data.result)
          this.code = ''
        })
    }
  }
}
</script>

<style scoped>
input {
  width: 50px;
  height: 50px;
  margin: 15px;
  border-radius: 10px;
}
</style>
