<template>
        <!-- <b-collapse id="collapse-1" class="mt-2"> -->
            <b-card class="border-0">
                <p>
                Type the amount you want to transfer and then<br>
                 press continue to the next steps.
                </p>
                <div class="text-center mt-5 row">
                    <div class="col-4"></div>
                    <div class="text-center col-4">
                        <input v-model="amount" placeholder="0.00" class="border-0 mt-5 pt-5 pb-5">
                    </div>
                    <div class="col-4"></div>
                    <div class="col-12">
                        <h5 class="font-weight-bold">Rp{{saldo}} Available</h5>
                    </div>
                    <div class="col-4"></div>
                    <div class="col-4">
                        <b-input-group class="mt-3 border-0">
                            <b-input-group-append>
                                <b-button class="bg-transparent border-0"><b-icon icon="pencil" variant="secondary"></b-icon></b-button>
                            </b-input-group-append>
                            <b-form-input v-model="note" placeholder="Add some notes" class="border-0"></b-form-input>
                        </b-input-group>
                        <div class="border-bottom"></div>
                    </div>
                    <div class="col-4"></div>
                </div>
                <div class="text-right">
                    <b-buttom class="btn btn-primary mt-5 rounded-lg" @click="handleTransfer">Continue</b-buttom>
                </div>
            </b-card>
        <!-- </b-collapse> -->
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'Collapse',
  props: ['idOther'],
  data () {
    return {
      amount: '',
      note: ''
    }
  },
  components: {
  },
  computed: {
    ...mapGetters({
      saldo: 'saldo',
      userId: 'userId'
    })
  },
  methods: {
    ...mapActions(['transfer']),
    handleTransfer () {
      const data = {
        idUser: this.userId,
        idOther: this.idOther,
        saldo: this.amount,
        note: this.note || ''
      }

      const input = {
        id: this.userId,
        data: data
      }

      this.transfer(input)
        .then((res) => {
        //   console.log(res)
          alert(res.data.result)
          alert(res.data.message)
        })
    }
  }
}
</script>

<style>

</style>
