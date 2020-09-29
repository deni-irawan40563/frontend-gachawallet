<template>
 <div class="container m-4">
      <div class="personal mb-5">
          <div class="title"><h4>Manage Phone Number</h4></div>
          <div class="text"><h6 class="text-left">You can only delete the phone number and then you must add another phone number.</h6></div>
      </div>

      <div v-for="phone in phoneUser" :key="phone.id">
        <!-- Primary -->
        <div v-if="phone.priority === '1'" class="card">
          <div class="row justify-content-between w-100">
            <div class="col-10">
              <h5 class="head"><p></p>Primary</h5>
              <h5 v-if="showPrimary" class="text-left">{{phone.phoneNumber}}</h5>
              <input v-else v-model="phonePrimary" @keyup.enter="handleUpdatePhone(phone.id)" :placeholder="phone.phoneNumber"/>
            </div>
            <div class="col-1">
              <b-button size="sm" class="mt-4" variant="outline-white">
                <b-icon icon="textarea-t" aria-hidden="true" variant="black" @click="handleUpdatePrimary"></b-icon>
                <b-icon icon="trash" aria-hidden="true" variant="black"></b-icon>
                </b-button>
            </div>
          </div>
        </div>
        <!-- Secondary -->
        <div v-else class="card">
          <div class="row justify-content-between w-100">
            <div class="col-10">
              <h5 class="head"><p></p>Secondary</h5>
              <h5 v-if="showSecondary" class="text-left">{{phone.phoneNumber}}</h5>
              <input v-else v-model="phoneSecondary" @keyup.enter="handleUpdatePhone(phone.id)" :placeholder="phone.phoneNumber"/>
            </div>
            <div class="col-1">
              <b-button size="sm" class="mt-4" variant="outline-white">
                <b-icon icon="key" aria-hidden="true" variant="black" @click="handleSetPrimary(phone.id)"></b-icon>
                <b-icon icon="textarea-t" aria-hidden="true" variant="black" @click="handleUpdateSecondary"></b-icon>
                <b-icon icon="trash" aria-hidden="true" variant="black"></b-icon>
              </b-button>
            </div>
          </div>
        </div>

      </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'ManagePhoneNumber',
  data () {
    return {
      showPrimary: true,
      showSecondary: true,
      phonePrimary: '',
      phoneSecondary: ''
    }
  },
  computed: {
    ...mapGetters({
      phoneUser: 'phoneUser',
      userId: 'userId'
    })
  },
  methods: {
    ...mapActions(['updatePhone']),
    ...mapActions(['getPhoneUser']),
    ...mapActions(['primary']),
    handleUpdatePrimary () {
      if (this.showPrimary === false) {
        this.showPrimary = true
      } else {
        this.showPrimary = false
      }
    },

    handleUpdateSecondary () {
      if (this.showSecondary === false) {
        this.showSecondary = true
      } else {
        this.showSecondary = false
      }
    },

    handleUpdatePhone (phoneId) {
      const data = {
        phoneNumber: this.phonePrimary || this.phoneSecondary
      }

      const input = {
        id: phoneId,
        data: data
      }
      this.updatePhone(input)
        .then((res) => {
          this.getPhoneUser(this.userId)
            .then((res) => {
              this.showPrimary = true
              this.showSecondary = true
            })
        })
    },

    handleSetPrimary (phoneId) {
      const data = {
        idUser: this.userId
      }

      const input = {
        id: phoneId,
        data: data
      }
      this.primary(input)
        .then((res) => {
          this.getPhoneUser(this.userId)
            .then((res) => {
              this.showPrimary = true
              this.showSecondary = true
            })
        })
    }
  }
}
</script>

<style scoped>
.card {
    width: 800px;
    border-radius: 10px;
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.05);
}
.head {
  align-items: flex-start;
    color: #7A7886;
}
</style>
