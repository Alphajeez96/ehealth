<template>
  <div>
    <section class="charts"></section>

    <section class="ma-5" id="container"></section>
  </div>
</template>
<script>
import Highcharts from 'highcharts'

export default {
  components: {},
  data() {
    return {
      details: {},
    }
  },

  computed: {
    //formated data here
    formatdata() {
      if (Object.keys(this.details).length) {
        let x = Object.values(this.details)
        let e = { o: 0, i: 0, a: 0, j: 0, ab: 0, k: 0, b: 0, l: 0 } //age 20 - 40
        let f = { o: 0, i: 0, a: 0, j: 0, ab: 0, k: 0, b: 0, l: 0 } //age 41 -60
        let g = { o: 0, i: 0, a: 0, j: 0, ab: 0, k: 0, b: 0, l: 0 } // age 61-80
        console.log(e)

        let twentygroup
        let fortygroup
        let sixtygroup

        //loop through object to get age property and subsequently sort by range
        for (const i of x) {
          if (i.Age > 19 && i.Age < 41) {
            if (i.Bloodgroup === 'O+') {
              e.o++
            } else if (i.Bloodgroup === 'O-') {
              e.i++
            } else if (i.Bloodgroup === 'A+') {
              e.a++
            } else if (i.Bloodgroup === 'A-') {
              e.j++
            } else if (i.Bloodgroup === 'AB+') {
              e.ab++
            } else if (i.Bloodgroup === 'AB-') {
              e.k++
            } else if (i.Bloodgroup === 'B+') {
              e.b++
            } else if (i.Bloodgroup === 'B-') {
              e.l++
            }
          } else if (i.Age > 40 && i.Age < 61) {
            if (i.Bloodgroup === 'O+') {
              f.o++
            } else if (i.Bloodgroup === 'O-') {
              f.i++
            } else if (i.Bloodgroup === 'A+') {
              f.a++
            } else if (i.Bloodgroup === 'A-') {
              f.j++
            } else if (i.Bloodgroup === 'AB+') {
              f.ab++
            } else if (i.Bloodgroup === 'AB-') {
              f.k++
            } else if (i.Bloodgroup === 'B+') {
              f.b++
            } else if (i.Bloodgroup === 'B-') {
              f.l++
            }
          } else if (i.Age > 60 && i.Age < 81) {
            if (i.Bloodgroup === 'O+') {
              g.o++
            } else if (i.Bloodgroup === 'O-') {
              g.i++
            } else if (i.Bloodgroup === 'A+') {
              g.a++
            } else if (i.Bloodgroup === 'A-') {
              g.j++
            } else if (i.Bloodgroup === 'AB+') {
              g.ab++
            } else if (i.Bloodgroup === 'AB-') {
              g.k++
            } else if (i.Bloodgroup === 'B+') {
              g.b++
            } else if (i.Bloodgroup === 'B-') {
              g.l++
            }
          }
        }
        twentygroup = Object.values(e)
        fortygroup = Object.values(f)
        sixtygroup = Object.values(g)

        return { twentygroup, fortygroup, sixtygroup }
      }
    },
  },
  async mounted() {
    await this.getData()

    //instantiate local storage
    if (localStorage.getItem('details')) {
      try {
        this.details = JSON.parse(localStorage.getItem('details'))
      } catch (error) {
        toast.error(error)
      }
    }

    //Chart settings here
    let series = [
      {
        allowPointSelect: true,
        name: '20-40 Years',
        data: [...this.formatdata.twentygroup],
      },
      {
        name: '41-60 Years',
        data: [...this.formatdata.fortygroup],
      },
      {
        name: '61-80 Years',
        data: [...this.formatdata.sixtygroup],
      },
    ]
    let myChart = Highcharts.chart('container', {
      chart: {
        type: 'column',
        options3d: {
          enabled: true,
          alpha: 8,
          beta: 358,
          depth: 50,
          viewDistance: 25,
        },
      },
      title: {
        text: 'Population',
      },
      xAxis: {
        categories: ['0+', '0-', 'A+', 'A-', 'AB+', 'AB-', 'B+', 'B-'],
      },
      yAxis: {
        title: {
          text: 'Frequency',
        },
      },
      plotOptions: {
        column: {
          depth: 40,
        },
      },
      legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'top',
        x: -40,
        y: 80,
        floating: true,
        borderWidth: 1,
        backgroundColor:
          (Highcharts.theme && Highcharts.theme.legendBackgroundColor) ||
          '#FFFFFF',
        shadow: true,
      },
      credits: {
        enabled: false,
      },

      series,
    })
  },

  methods: {
    async getData() {
      try {
        let response = await this.$http.get(
          `https://ehealth-alpha.firebaseio.com/users.json`,
        )
        this.details = response.data
        //set to local storage
        let offline = JSON.stringify(this.details)
        localStorage.setItem('details', offline)
      } catch (error) {
        toast.error(error.response)
      }
    },
  },
}
</script>
