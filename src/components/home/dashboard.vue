<template>
  <div>
    <cards></cards>
    <chart></chart>
  </div>
</template>

<script>
import cards from './cards'
import chart from './barchart'
const axios = require('axios')

export default {
  name: 'dashboard',
  components: {
    cards,
    chart,
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
        this.users = response
      } catch (error) {
        console.log(error.response)
      }
    },
  },
}
</script>
