<template>
  <div class="container p-0 m-4">
      <router-view />
      <div class="personal mb-5">
          <div class="title"><h4>Personal Information</h4></div>
          <div class="text"><h6 class="text-left">We got your personal information from the sign up proccess. If you want to make changes on your information, contact our support.</h6></div>
      </div>
      <div class="card">
          <div class="text1 ml-3">
              <h6>First Name</h6>
          </div>
          <div class="text2 ml-3">
              <h5 class="font-weight-bolder">Robert</h5>
          </div>
      </div>
      <div class="card mt-3">
          <div class="text1 ml-3">
              <h6>Last Name</h6>
          </div>
          <div class="text2 ml-3">
              <h5 class="font-weight-bolder">Chandler</h5>
          </div>
      </div>
      <div class="card mt-3">
          <div class="text1 ml-3">
              <h6>Verified E-mail</h6>
          </div>
          <div class="text2 ml-3">
              <h5 class="font-weight-bolder">pewdiepie1@gmail.com</h5>
          </div>
      </div>
      <div class="card mt-3">
          <div class="text1 ml-3">
              <h6>Phone Number</h6>
          </div>
          <div class="text2 ml-3">
              <h5 class="font-weight-bolder">+62 813-9387-7946</h5>
          </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'PersonalInfo'
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
