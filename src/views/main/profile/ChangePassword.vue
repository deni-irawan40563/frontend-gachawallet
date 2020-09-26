<template>
  <div class="container m-4">
      <div class="personal mb-5">
          <div class="title"><h4>Change Password</h4></div>
          <div class="text"><h6 class="text-left">You must enter your current password and then type new password twice.</h6></div>
      </div>
          <b-form-group id="input-group-2" label-for="input-2">
            <b-row>
              <b-icon icon="lock" variant="secondary" class="col-1 mt-2"></b-icon>
              <b-form-input type="password" id="input-2" required placeholder="Current password" class=" border-0 col-4"></b-form-input>
            </b-row>
          </b-form-group>
          <b-form-group id="input-group-2" label-for="input-2">
            <b-row>
              <b-icon icon="lock" variant="secondary" class="col-1 mt-2"></b-icon>
              <b-form-input type="password" id="input-2" required placeholder="New password" class=" border-0 col-4"></b-form-input>
            </b-row>
          </b-form-group>
          <b-form-group id="input-group-2" label-for="input-2">
            <b-row>
              <b-icon icon="lock" variant="secondary" class="col-1 mt-2"></b-icon>
              <b-form-input type="password" id="input-2" required placeholder="Repeat New password" class=" border-0 col-4"></b-form-input>
            </b-row>
          </b-form-group>
           <div class="row justify-content-center">
            <button type="button" class="btn btn-light">Change Password</button>
           </div>
  </div>
</template>

<script>
export default {
  name: 'ChangePassword'
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

</style>
