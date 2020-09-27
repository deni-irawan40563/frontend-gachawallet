<template>
 <div class="container m-4">
      <div class="personal mb-5">
          <div class="title"><h4>Manage Phone Number</h4></div>
          <div class="text"><h6 class="text-left">You can only delete the phone number and then you must add another phone number.</h6></div>
      </div>
      <div class="card">
        <div class="row justify-content-between w-100">
          <div class="col-10">
            <h5 class="head"><p></p>Primary</h5>
            <h5 class="text-left">+62 813 9387 7946</h5>
          </div>
          <div class="col-1">
             <b-button size="sm" class="mt-4" variant="outline-white">
              <b-icon icon="trash" aria-hidden="true" variant="black"></b-icon>
              </b-button>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'ManagePhoneNumber'
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
