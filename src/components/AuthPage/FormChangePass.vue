<template>
  <div>
    <b-form @submit="onSubmit" @reset="onReset" v-if="show" class="w-75">
<!-- form new password -->
      <b-form-group id="input-group-2" label-for="input-2">
        <b-row>
            <b-icon icon="lock" variant="secondary" class="col-1 mt-2 mx-auto"></b-icon><!-- handle icon kunci -->
            <b-form-input
            type="password"
            id="input-2"
            v-model="form.password"
            required
            placeholder="Enter your new password"
            class=" border-0 col"
            ></b-form-input>
        </b-row>
        <div class="border-bottom"></div><!-- handle border bottom -->
      </b-form-group>

<!-- form confirm password -->
      <b-form-group id="input-group-2" label-for="input-2">
        <b-row>
            <b-icon icon="lock" variant="secondary" class="col-1 mt-2 mx-auto"></b-icon><!-- handle icon kunci -->
            <b-form-input
            type="password"
            id="input-2"
            v-model="form.confirmPassword"
            required
            placeholder="Enter your confirm password"
            class=" border-0 col"
            ></b-form-input>
        </b-row>
        <div class="border-bottom"></div><!-- handle border bottom -->
      </b-form-group>

        <b-button type="submit" variant="secondary" class="buttom-style mt-5" block >Confirm</b-button>
    </b-form>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'formChangePassword',
  data () {
    return {
      form: {
        password: '',
        confirmPassword: ''
      },
      show: true
    }
  },
  methods: {
    ...mapActions(['resetPassword']),
    onSubmit (evt) {
      evt.preventDefault()
      if (this.form.password.length >= 8) {
        if (this.form.password === this.form.confirmPassword) {
          const data = {
            password: this.form.password
          }
          this.resetPassword(data).then((res) => {
            this.$router.push('/login')
          })
        } else {
          alert('password tidak sama')
        }
      } else {
        alert('password minimal 8 karakter')
      }
    },
    onReset (evt) {
      evt.preventDefault()
      // Reset our form values
      this.form.email = ''
      // Trick to reset/clear native browser form validation state
      this.show = false
      this.$nextTick(() => {
        this.show = true
      })
    }
  }
}
</script>

<style scoped>
.buttom-style {
    border-radius: 12px;
}
</style>
