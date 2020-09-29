<template>
  <div class="container m-4">
      <div class="personal mb-5">
          <div class="title"><h4>Change Password</h4></div>
          <div class="text"><h6 class="text-left">You must enter your current password and then type new password twice.</h6></div>
      </div>
          <b-form-group id="input-group-2" label-for="input-2" class="center w-50">
            <b-row>
              <b-icon icon="lock" variant="secondary" class="col-2 mt-2"></b-icon>
              <b-form-input v-model="currentPassword" type="password" id="input-2" required placeholder="Current password" class=" border-0 col-9"></b-form-input>
            </b-row>
            <div class="border-bottom"></div>
          </b-form-group>
          <b-form-group id="input-group-2" label-for="input-2" class="center w-50">
            <b-row>
              <b-icon icon="lock" variant="secondary" class="col-2 mt-2"></b-icon>
              <b-form-input v-model="newPassword" type="password" id="input-2" required placeholder="New password" class=" border-0 col-9"></b-form-input>
            </b-row>
            <div class="border-bottom"></div>
          </b-form-group>
          <b-form-group id="input-group-2" label-for="input-2" class="center w-50">
            <b-row>
              <b-icon icon="lock" variant="secondary" class="col-2 mt-2"></b-icon>
              <b-form-input v-model="repeatPassword" type="password" id="input-2" placeholder="Repeat new password" class=" border-0 col-9"></b-form-input>
            </b-row>
            <div class="border-bottom"></div>
          </b-form-group>
           <div class="row justify-content-center mt-5">
            <button type="button" class="btn btn-light" @click="handleChangePassword">Change Password</button>
           </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'ChangePasswordProfile',
  data () {
    return {
      currentPassword: '',
      newPassword: '',
      repeatPassword: ''
    }
  },
  computed: {
    ...mapGetters({
      resetId: 'resetId',
      userEmail: 'userEmail'
    })
  },
  methods: {
    ...mapActions(['resetPassword']),
    ...mapActions(['confirmPassword']),

    handleChangePassword () {
      const data = {
        email: this.userEmail,
        password: this.currentPassword
      }
      this.confirmPassword(data)
        .then((res) => {
          if (res.data.result === 'Correct Password') {
            if (this.newPassword.length >= 8) {
              if (this.newPassword === this.repeatPassword) {
                const newData = {
                  id: this.resetId,
                  password: this.newPassword
                }
                this.resetPassword(newData)
                  .then((res) => {
                    alert('change password success')
                    this.currentPassword = ''
                    this.newPassword = ''
                    this.repeatPassword = ''
                  })
              } else {
                alert('Repeat Password Wrong!')
              }
            } else {
              alert('New Password lower than 8 char')
            }
          } else {
            alert('Correct Password Wrong!')
          }
        })
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

.center {
  margin-left: 200px;
}
</style>
