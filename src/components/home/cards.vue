<template>
  <v-row >

    <v-col  cols="12" sm="2"></v-col>
    <v-col  class="mt-5" cols="12" sm="3">
      <v-card elevation="6" class="mx-auto" max-width="344">
        <v-list-item three-line>
          <v-list-item-content>
            <div class="overline mb-4">OVERLINE</div>
            <v-list-item-title class="headline mb-1">
              Headline 5
            </v-list-item-title>
            <v-list-item-subtitle>
              Greyhound divisely hello coldly fonwderfully
            </v-list-item-subtitle>
          </v-list-item-content>

          <v-list-item-avatar tile size="80" color="grey"></v-list-item-avatar>
        </v-list-item>

        <v-card-actions>
          <v-btn text>Button</v-btn>
          <v-btn text>Button</v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
    <v-col class="mt-5" cols="12" sm="3">
      <v-card elevation="6" class="mx-auto" max-width="344">
        <v-list-item three-line>
          <v-list-item-content>
            <div class="overline mb-4">OVERLINE</div>
            <v-list-item-title class="headline mb-1">
              Headline 5
            </v-list-item-title>
            <v-list-item-subtitle>
              Greyhound divisely hello coldly fonwderfully
            </v-list-item-subtitle>
          </v-list-item-content>

          <v-list-item-avatar tile size="80" color="grey"></v-list-item-avatar>
        </v-list-item>

        <v-card-actions>
          <v-btn text>Button</v-btn>
          <v-btn text>Button</v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
    <v-col cols="12" class="mt-5" sm="3">
      <v-card elevation="6" class="mx-auto" max-width="344">
        <v-list-item three-line>
          <v-list-item-content>
            <div class="overline mb-4">OVERLINE</div>
            <v-list-item-title class="headline mb-1">
              Headline 5
            </v-list-item-title>
            <v-list-item-subtitle>
              Greyhound divisely hello coldly fonwderfully
            </v-list-item-subtitle>
          </v-list-item-content>

          <v-list-item-avatar tile size="80" color="grey"></v-list-item-avatar>
        </v-list-item>

        <v-card-actions>
          <v-btn text>Button</v-btn>
          <v-btn text>Button</v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>
<script>
import cards from './cards'
const axios = require('axios')

export default {
  name: 'dashboard',
  components: {
    cards,
  },
  data() {
    return {
      users: [],
    }
  },

  mounted() {
    this.getData()
  },
  methods: {
    async getData() {
      try {
        let response = await this.$http.get(
          `https://ehealth-alpha.firebaseio.com/users.json`,
        )
        this.users = response.data
        console.log(response.data)
        // this.url = response.data
        // console.log(response.data.data.results)
      } catch (error) {
        console.log(error.response)
      }
    },
  },
}
</script>

