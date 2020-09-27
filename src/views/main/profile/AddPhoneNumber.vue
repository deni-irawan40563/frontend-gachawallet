<template>
 <div class="container m-4">
      <div class="personal mb-5">
          <div class="title"><h4>Add Phone Number</h4></div>
          <div class="text"><h6 class="text-left">Add at least one phone number for the transfer ID so you can start transfering your money to another user.</h6></div>
      </div>
      <b-form-group id="input-group-2" label-for="input-2" align="center" class="center1 mb-5 w-50">
            <b-row class="m-0 p-0">
              <b-icon icon="telephone" variant="secondary" class="col-0 pt-4"></b-icon>
              <b-form-input type="text" id="input-2" value="+62" class=" border-0 col-2"></b-form-input>
              <b-form-input type="text" id="input-2" placeholder="Enter your phone number" class=" border-0 col-9"></b-form-input>
            </b-row>
              <div class="border-bottom"></div>
          </b-form-group>
      <div class="row justify-content-center">
        <button type="button" class="btn btn-light w-25">Add Phone Number</button>
      </div>
  </div>
</template>

<script>
export default {
  name: 'ChangePIN'
}
</script>

<style scoped>
.center1 {
  margin-left: 200px;
  margin-top: 100px;
}
input {
  width: 50px;
  height: 50px;
  margin: 5px;
  border-radius: 10px;
}
border-bottom {
  width: 50px;
}
</style>
