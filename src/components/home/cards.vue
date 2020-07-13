<template>
  <v-row>
    <v-col class="mt-5" cols="12" sm="3">
      <v-card elevation="2" class="mx-auto" max-width="344">
        <v-list-item three-line>
          <v-list-item-content>
            <v-list-item-title class="headline mb-1">
              Blood Group: O+
              <span></span>
            </v-list-item-title>
            <v-list-item-subtitle>
              Total Count:
              <span>{{ this.formatdata.o1 }}</span>
            </v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-card>
    </v-col>
    <v-col class="mt-5" cols="12" sm="3">
      <v-card elevation="2" class="mx-auto" max-width="344">
        <v-list-item three-line>
          <v-list-item-content>
            <v-list-item-title class="headline mb-1">
              Blood Group: A+
              <span></span>
            </v-list-item-title>
            <v-list-item-subtitle>
              Total Count:
              <span>{{ this.formatdata.a1 }}</span>
            </v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-card>
    </v-col>
    <v-col class="mt-5" cols="12" sm="3">
      <v-card elevation="2" class="mx-auto" max-width="344">
        <v-list-item three-line>
          <v-list-item-content>
            <v-list-item-title class="headline mb-1">
              Blood Group: B+
              <span></span>
            </v-list-item-title>
            <v-list-item-subtitle>
              Total Count:
              <span>{{ this.formatdata.b1 }}</span>
            </v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-card>
    </v-col>
    <v-col class="mt-5" cols="12" sm="3">
      <v-card elevation="2" class="mx-auto" max-width="344">
        <v-list-item three-line>
          <v-list-item-content>
            <v-list-item-title class="headline mb-1">
              Blood Group: AB+
              <span></span>
            </v-list-item-title>
            <v-list-item-subtitle>
              Total Count:
              <span>{{ this.formatdata.ab1 }}</span>
            </v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-card>
    </v-col>
    <v-col class="mt-5" cols="12" sm="3">
      <v-card elevation="2" class="mx-auto" max-width="344">
        <v-list-item three-line>
          <v-list-item-content>
            <v-list-item-title class="headline mb-1">
              Blood Group: O-
              <span></span>
            </v-list-item-title>
            <v-list-item-subtitle>
              Total Count:
              <span>{{ this.formatdata.o2 }}</span>
            </v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-card>
    </v-col>
    <v-col class="mt-5" cols="12" sm="3">
      <v-card elevation="2" class="mx-auto" max-width="344">
        <v-list-item three-line>
          <v-list-item-content>
            <v-list-item-title class="headline mb-1">
              Blood Group: A-
              <span></span>
            </v-list-item-title>
            <v-list-item-subtitle>
              Total Count:
              <span>{{ this.formatdata.a2 }}</span>
            </v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-card>
    </v-col>
    <v-col class="mt-5" cols="12" sm="3">
      <v-card elevation="2" class="mx-auto" max-width="344">
        <v-list-item three-line>
          <v-list-item-content>
            <v-list-item-title class="headline mb-1">
              Blood Group: B-
              <span></span>
            </v-list-item-title>
            <v-list-item-subtitle>
              Total Count:
              <span>{{ this.formatdata.b2 }}</span>
            </v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-card>
    </v-col>
    <v-col class="mt-5" cols="12" sm="3">
      <v-card elevation="2" class="mx-auto" max-width="344">
        <v-list-item three-line>
          <v-list-item-content>
            <v-list-item-title class="headline mb-1">
              Blood Group: AB-
              <span></span>
            </v-list-item-title>
            <v-list-item-subtitle>
              Total Count:
              <span>{{ this.formatdata.ab2 }}</span>
            </v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-card>
    </v-col>
  </v-row>
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
        let e = { o: 0 } //blood group o+
        let f = { i: 0 } //age 41 -60
        let g = { a: 0 } //age 41 -60
        let h = { j: 0 } //age 41 -60
        let i = { b: 0 } //age 41 -60
        let j = { k: 0 } //age 41 -60
        let k = { ab: 0 } //age 41 -60
        let l = { l: 0 } //age 41 -60
        console.log(e)

        let o1
        let o2
        let a1
        let a2
        let ab1
        let ab2
        let b1
        let b2

        //loop through object to get bloodgroup property and subsequently sort
        for (const i of x) {
          if (i.Bloodgroup === 'O+') {
            e.o++
          } else if (i.Bloodgroup === 'O-') {
            f.i++
          } else if (i.Bloodgroup === 'A+') {
            g.a++
          } else if (i.Bloodgroup === 'A-') {
            h.j++
          } else if (i.Bloodgroup === 'B+') {
            i.b++
          } else if (i.Bloodgroup === 'B-') {
            j.k++
          } else if (i.Bloodgroup === 'AB+') {
            k.ab++
          } else if (i.Bloodgroup === 'AB-') {
            l.l++
          }
        }
        o1 = Object.values(e)
        o2 = Object.values(f)
        a1 = Object.values(g)
        a2 = Object.values(h)
        b1 = Object.values(i)
        b2 = Object.values(j)
        ab1 = Object.values(k)
        ab2 = Object.values(l)

        return { o1, o2, a1, a2, b1, b2, ab1, ab2 }
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
        console.log(error)
      }
    }
  },

  methods: {
    async getData() {
      try {
        let response = await this.$http.get(
          `https://ehealth-alpha.firebaseio.com/users.json`,
        )
        this.details = response.data
        //set to local storage
        let local_count = JSON.stringify(this.details)
        localStorage.setItem('users', local_count)
      } catch (error) {
        console.log(error.response)
      }
    },
  },
}
</script>
