<script>
import { Bar } from 'vue-chartjs'

export default {
  extends: Bar,
  mounted () {
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
            data: [40, 20, 12, 39, 30, 40, 39]
          }
        ]
      },
      { responsive: true, maintainAspectRatio: false }
    )
  }
}
</script>
