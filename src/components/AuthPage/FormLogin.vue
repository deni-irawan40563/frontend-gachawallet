<template>
  <div>
    <b-form @submit="onSubmit" @reset="onReset" v-if="show" class="w-75">
<!-- form email -->
      <b-form-group
        id="input-group-1"
        label-for="input-1"
      >
      <b-row>
            <b-icon icon="envelope" variant="secondary" class="col-1 mt-2 mx-auto"></b-icon><!-- handle icon mail -->
            <b-form-input
            id="input-1"
            v-model="form.email"
            type="email"
            required
            placeholder="Enter your e-mail"
            class=" border-0 col"
            ></b-form-input>
        </b-row>
        <div class="border-bottom"></div><!-- handle border bottom -->
      </b-form-group>
<!-- form password -->
      <b-form-group id="input-group-2" label-for="input-2">
        <b-row>
            <b-icon icon="lock" variant="secondary" class="col-1 mt-2 mx-auto"></b-icon><!-- handle icon kunci -->
            <b-form-input
            type="password"
            id="input-2"
            v-model="form.password"
            required
            placeholder="Enter your password"
            class=" border-0 col-11"
            ></b-form-input>
        </b-row>
        <div class="border-bottom"></div><!-- handle border bottom -->
      </b-form-group>
        <div class="text-right mt-2 mb-5">
            <router-link to="/resetpassword" class="text-muted">Forgot password?</router-link>
        </div>
        <b-button type="submit" variant="secondary" class="buttom-style mt-5" block >Login</b-button>
        <div class="text-center mt-5">
            <p>Don’t have an account? Let’s <router-link to="/signup">Sign Up</router-link></p>
        </div>
    </b-form>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'formlogin',
  data () {
    return {
      form: {
        email: '',
        password: ''
      },
      show: true
    }
  },
  methods: {
    ...mapActions(['login']),

    onSubmit (evt) {
      evt.preventDefault()
      const data = {
        email: this.form.email,
        password: this.form.password
      }

      this.login(data).then((res) => {
        this.$router.push('/main')
      })
    },
    onReset (evt) {
      evt.preventDefault()
      // Reset our form values
      this.form.email = ''
      this.form.password = ''
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
