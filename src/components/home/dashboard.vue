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
    cards, chart
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
        let me = response.data
        console.log(me); 

        let sortable =[];
        for (var Age in me) {
    sortable.push([Age, me[Age]]);
}
//  console.log(typeof(sortable)); 
var you= sortable.sort(function(a, b) {
  var keyA = new Date(a.Age),
    keyB = new Date(b.Age);
  // Compare the 2 dates
  if (keyA < keyB) return -1;
  if (keyA > keyB) return 1;
  return 0;
});
 console.log(you)

        // this.url = response.data
        // console.log(response.data.data.results)
      } catch (error) {
        console.log(error.response)
      }
    },
  },
}
</script>
