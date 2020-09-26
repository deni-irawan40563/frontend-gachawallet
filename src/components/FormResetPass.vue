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

        <b-button type="submit" variant="secondary" class="buttom-style mt-5" block >Confirm</b-button>
    </b-form>
  </div>
</template>

<script>
export default {
  name: 'formlogin',
  data () {
    return {
      form: {
        email: ''
      },
      show: true
    }
  },
  methods: {
    onSubmit (evt) {
      evt.preventDefault()
      alert(JSON.stringify(this.form))
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
