<template>
  <div class="container p-0 m-4">
      <router-view />
      <div class="personal mb-5">
          <div class="title"><h4>Personal Information</h4></div>
          <div class="text"><h6 class="text-left">We got your personal information from the sign up proccess. If you want to make changes on your information, contact our support.</h6></div>
      </div>
      <div class="card">
          <div class="text1 ml-3" @click="openFN">
              <h6>First Name</h6>
          </div>
          <div class="text2 ml-3">
              <h5 v-if="showFN" class="font-weight-bolder">{{firstName}}</h5>
              <input v-else v-model="inputFirstName" @keyup.enter="handleupdate" :placeholder="firstName"/>
          </div>
      </div>
      <div class="card mt-3">
          <div class="text1 ml-3" @click="openLN">
              <h6>Last Name</h6>
          </div>
          <div class="text2 ml-3">
              <h5 v-if="showLN" class="font-weight-bolder">{{lastName}}</h5>
              <input v-else v-model="inputLastName" @keyup.enter="handleupdate" :placeholder="lastName"/>
          </div>
      </div>
      <div class="card mt-3">
          <div class="text1 ml-3">
              <h6>Verified E-mail</h6>
          </div>
          <div class="text2 ml-3">
              <h5 class="font-weight-bolder">{{userEmail}}</h5>
          </div>
      </div>
      <div class="card mt-3">
          <div class="row justify-content-between w-100">
              <div class="col-8">
                  <div class="text1">
                    <h6>Phone Number</h6>
                  </div>
                  <div class="text2">
                    <h5 class="font-weight-bolder">{{phoneNumber}}</h5>
                  </div>
              </div>
            <div class="col-2 mt-3">
              <router-link to="/managePhoneNumber">
                   <span @click="handlePhone">Manage</span>
              </router-link>
            </div>
          </div>
      </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'PersonalInfo',
  data () {
    return {
      showFN: true,
      showLN: true,
      inputFirstName: '',
      inputLastName: ''
    }
  },
  computed: {
    ...mapGetters({
      firstName: 'firstName',
      lastName: 'lastName',
      userName: 'userName',
      userEmail: 'userEmail',
      phoneNumber: 'phoneNumber',
      userId: 'userId',
      infoUser: 'infoUser'
    })
  },
  methods: {
    ...mapActions(['getPhoneUser']),
    ...mapActions(['updateUser']),
    ...mapActions(['getUserId']),

    handlePhone () {
      this.getPhoneUser(this.userId)
    },

    handleupdate () {
      const data = {
        username: this.userName,
        firstName: this.inputFirstName || this.firstName,
        lastName: this.inputLastName || this.lastName,
        infoUser: this.infoUser
      }

      const input = {
        id: this.userId,
        data: data
      }

      this.updateUser(input)
        .then((res) => {
          this.getUserId(this.userId)
            .then((res) => {
              this.showFN = true
            })
        })
    },

    openFN () {
      if (this.showFN === true) {
        this.showFN = false
      } else {
        this.showFN = true
      }
    },

    openLN () {
      if (this.showLN === true) {
        this.showLN = false
      } else {
        this.showLN = true
      }
    }
  }
}
</script>

<style scoped>
.personal {
    display: flex;
    flex-direction: column;
}
.title {
    display: flex;
}

.card {
    width: 800px;
    display: flex;
    flex-direction: column;
    border-radius: 10px;
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.05);
}
.text1 {
    display: flex;
    align-self: flex-start;
    color: #7A7886;
}
.text2 {
    display: flex;
    align-self: flex-start;
}
.text3 {
    display: flex;
    align-self: flex-end;
}
</style>
