<template>
  <div class="container p-5 justify-content-center">
      <div class="container-img row justify-content-center">
        <img v-if="userImage" :src="userImage" alt="">
        <img v-else src="../../../assets/Profile/pp.png" alt="">
      </div>
      <div class="edit mt-2">
          <div class="row justify-content-center m-1" >
              <div class="pen" @click="handleEdit"></div>
              <h6 @click="handleEdit">Edit</h6>
            <div v-if="uploadPhoto">
              <form>
                <input type="file" @change="onFileUpload" />
                <button @click.prevent="handleUpload">Upload</button>
              </form>
            </div>
          </div>
      </div>
      <div class="name justify-content-center mt-3">
          <h3 class="font-weight-bolder">{{name}}</h3>
          <h6 class="phone-num">{{phoneNumber}}</h6>
      </div>
      <router-link to="/personalInfo">
      <div class="menu row justify-content-center mt-5">
        <div class="card row justify-content-between">
          <div class="col-10 ml-0">
              <h5 class="text-left pt-2">Personal Information</h5>
          </div>
          <div class="col-2">
              <div class="arrow mt-2"></div>
          </div>
        </div>
      </div>
      </router-link>
      <router-link to="/changepasswordprofile">
      <div class="menu row justify-content-center mt-3">
        <div class="card row justify-content-between">
          <div class="col-10 ml-0">
              <h5 class="text-left pt-2" @click="handleChangePassword">Change Password</h5>
          </div>
          <div class="col-2">
              <div class="arrow mt-2"></div>
          </div>
        </div>
      </div>
      </router-link>
      <router-link to="/changePIN">
       <div class="menu row justify-content-center mt-3">
        <div class="card row justify-content-between">
          <div class="col-10 ml-0">
              <h5 class="text-left pt-2">Change PIN</h5>
          </div>
          <div class="col-2">
              <div class="arrow mt-2"></div>
          </div>
        </div>
      </div>
      </router-link>
       <div class="menu row justify-content-center mt-3">
        <div class="card row justify-content-between">
          <div class="col-10 ml-0">
              <h5 class="text-left pt-2">Logout</h5>
          </div>
          <div class="col-2">
              <div class="arrow mt-2"></div>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'Profile',
  data () {
    return {
      FILE: '',
      uploadPhoto: false
    }
  },
  computed: {
    ...mapGetters({
      name: 'name',
      userId: 'userId',
      userImage: 'userImage',
      phoneNumber: 'phoneNumber',
      firstName: 'firstName',
      lastName: 'lastName',
      userName: 'userName',
      infoUser: 'infoUser'
    })
  },
  methods: {
    ...mapActions(['getResetId']),
    ...mapActions(['updateUser']),
    ...mapActions(['updateImage']),
    ...mapActions(['getUserId']),

    handleChangePassword () {
      this.getResetId(this.userId)
        .then((res) => {
        })
    },

    handleEdit () {
      if (this.uploadPhoto === false) {
        this.uploadPhoto = true
      } else {
        this.uploadPhoto = false
      }
    },

    onFileUpload (event) {
      this.FILE = event.target.files[0]
    },

    handleUpload () {
      const formData = new FormData()
      formData.append('image', this.FILE, this.FILE.name)

      const input = {
        id: this.userId,
        data: formData
      }

      this.updateImage(input)
        .then((res) => {
          this.getUserId(this.userId)
            .then((res) => {
              console.log('success')
            })
        })
    }
  }
}
</script>

<style scoped>
.container-img {
    width: 80px;
    height: 80px;
    margin: auto;
}
.container-img img{
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.edit {
    cursor: pointer;
    color: #7A7886;
}
.pen {
    width: 30px;
    height: 30px;

    background-image: url('../../../assets/Landing/pencil.png');
    background-size: 20px;
    background-repeat: no-repeat;
}
.name {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.phone-num {
    color: #7A7886;
}

a {
    color:  #4D4B57;
}
.card {
    width: 400px;
    height: 50px;
    border-radius: 10px;
    background-color: #E5E8ED;
    cursor: pointer;
}
.arrow {
    width: 50px;
    height: 50px;
    background-image: url('../../../assets/Landing/arrow-left.png');
    background-repeat: no-repeat;
}
</style>
