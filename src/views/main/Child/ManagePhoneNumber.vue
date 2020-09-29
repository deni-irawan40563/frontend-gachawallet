<template>
 <div class="container m-4">
      <div class="personal mb-5">
          <div class="title"><h4>Manage Phone Number</h4></div>
          <div class="text"><h6 class="text-left">You can only delete the phone number and then you must add another phone number.</h6></div>
      </div>

      <div v-for="phone in phoneUser" :key="phone.id">
        <!-- Primary -->
        <div v-if="phone.priority === '1'" class="card p-2 mb-2">
          <div class="row justify-content-between w-100">
            <div class="col-10">
              <h5 class="head">Primary</h5>
              <h5 class="text-left">{{phone.phoneNumber}}</h5>
            </div>
            <div class="col-1">
              <b-button size="sm" class="mt-4" variant="outline-white">
                <b-icon icon="trash" aria-hidden="true" variant="danger"></b-icon>
                </b-button>
            </div>
          </div>
        </div>
        <!-- Secondary -->
        <div v-else class="card p-2 mb-2">
          <div class="row justify-content-between w-100">
            <div class="col-10">
              <h5 class="head"><p></p>Secondary</h5>
              <h5 class="text-left">{{phone.phoneNumber}}</h5>
            </div>
            <div class="col-1">
              <b-button size="sm" class="mt-4" variant="outline-white">
                <b-icon icon="trash" aria-hidden="true" variant="danger"></b-icon>
                </b-button>
            </div>
          </div>
        </div>

      </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'ManagePhoneNumber',
  computed: {
    ...mapGetters({
      phoneUser: 'phoneUser'
    })
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
