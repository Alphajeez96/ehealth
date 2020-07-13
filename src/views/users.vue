<template>
  <div>
    <v-row>
      <v-col v-for="user in users" :key="user.id" class="mt-5" cols="12" sm="4">
        <v-card class="mx-auto" max-width="344" outlined elevation="4">
          <v-list-item three-line>
            <v-list-item-content>
              <div class="overline mb-4">{{ user.Bloodgroup }}</div>
              <v-list-item-title class="headline mb-1">
                {{ user.Name }}
              </v-list-item-title>
              <div class="overine mb-4 pt-3">
                Age:
                <span>{{ user.Age }}</span>
                Years
              </div>
            </v-list-item-content>

            <v-list-item-avatar
              tile
              size="80"
              color="grey"
              v-for="item in items"
              :key="item.id"
            >
              <v-img :src="item.avatar"></v-img>
            </v-list-item-avatar>
          </v-list-item>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
const axios = require('axios')

export default {
  data() {
    return {
      users: [],
      items: [{ avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg' }],
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
        let me = response.data
        console.log(me)
      } catch (error) {
        console.log(error.response)
      }
    },
  },
}
</script>
