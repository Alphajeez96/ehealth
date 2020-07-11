<template>
<div>
<cards></cards>

</div>
</template>

<script>
import cards from './cards'
const axios = require('axios')

export default {
  name: 'dashboard',
  components:{
      cards
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
          `https://ehealth-alpha.firebaseio.com/users`,
        )
        this.users = response.data
        console.log( response.data)
        // this.url = response.data
        // console.log(response.data.data.results)
      } catch (error) {
        console.log(error.response)
      }
    },
  },
}
</script>
