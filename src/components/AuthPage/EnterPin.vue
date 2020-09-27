<template>
  <div>
    <b-form @submit="onSubmit" @reset="onReset" v-if="show" class="w-75">
<!-- form Pin -->
            <b-input-group class="mt-5">
                <b-form-input v-model="form.pin1" class="mr-3 rounded-lg"></b-form-input>
                <b-form-input v-model="form.pin2" class="mr-3 rounded-lg"></b-form-input>
                <b-form-input v-model="form.pin3" class="mr-3 rounded-lg"></b-form-input>
                <b-form-input v-model="form.pin4" class="mr-3 rounded-lg"></b-form-input>
                <b-form-input v-model="form.pin5" class="mr-3 rounded-lg"></b-form-input>
            </b-input-group>

        <b-button type="submit" variant="secondary" class="buttom-style mt-5" block >Confirm</b-button>
    </b-form>
  </div>
</template>

<script>
export default {
  name: 'Enter Pin',
  data () {
    return {
      form: {
        pin: ''
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
      this.form.pin = ''
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
