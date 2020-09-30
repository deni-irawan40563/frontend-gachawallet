<script>
import { Bar } from 'vue-chartjs'
import { mapGetters } from 'vuex'
export default {
  extends: Bar,
  data () {
    return {
      sat: [],
      sun: [],
      mon: [],
      tue: [],
      wed: [],
      thu: [],
      fri: []
    }
  },
  computed: {
    ...mapGetters({
      historyUser: 'historyUser'
    })
  },
  mounted () {
    this.historyUser.map((item) => {
      if (item.day === 'Sat') {
        this.sat.push(item)
      }
      if (item.day === 'Sun') {
        this.sun.push(item)
      }
      if (item.day === 'Mon') {
        this.mon.push(item)
      }
      if (item.day === 'Tue') {
        this.tue.push(item)
      }
      if (item.day === 'Wed') {
        this.wed.push(item)
      }
      if (item.day === 'Thu') {
        this.thu.push(item)
      }
      if (item.day === 'Fri') {
        this.fri.push(item)
      }
    })
    this.renderChart(
      {
        labels: [
          'Sat',
          'Sun',
          'Mon',
          'Tue',
          'Wed',
          'Thu',
          'Fri'
        ],
        datasets: [
          {
            label: 'Transaction History',
            backgroundColor: '#6379F4',
            data: [this.sat.length, this.sun.length, this.mon.length, this.tue.length9, this.wed.length, this.thu.length, this.fri.length]
          }
        ]
      },
      { responsive: true, maintainAspectRatio: false }
    )
  }
}
</script>
