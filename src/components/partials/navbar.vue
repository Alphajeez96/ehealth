<template>
  <nav>
    <v-app-bar>
      <v-app-bar-nav-icon
        class="grey--text"
        @click="drawer = !drawer"
      ></v-app-bar-nav-icon>
      <v-toolbar-title class="text-uppercase grey--text">
        <span class="font-weight-light">Alpha</span>
        <span>Clinics</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
    </v-app-bar>
    <v-navigation-drawer app color="black" v-model="drawer">
      <v-app-bar-nav-icon
        class="white--text"
        @click="drawer = !drawer"
      ></v-app-bar-nav-icon>
      <v-col>
        <v-layout column align-center>
          <v-flex class="mt-5">
            <v-avatar size="100">
              <img src="../../assets/img/avatar-1.png" />
            </v-avatar>
            <p class="white--text subheading mt-1 mx-2">Admin</p>
          </v-flex>

          <v-flex class="mt-4 mb-3"></v-flex>
        </v-layout>
        <v-list dark>
          <v-list-item-group v-model="item" color="primary">
            <v-list-item
              v-for="(item, i) in items"
              :key="i"
              router
              :to="item.route"
            >
              <v-list-item-icon>
                <v-icon v-text="item.icon"></v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title v-text="item.text"></v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-col>
    </v-navigation-drawer>
  </nav>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      drawer: false,
      item: 1,
      items: [
        { text: 'Dashboard', icon: 'mdi-home', route: '/' },
        { text: 'Users', icon: 'mdi-folder', route: '/users' },
        { text: 'Team', icon: 'mdi-account', route: '/team' },
      ],
    }
  },
}
</script>
<style scoped>
body {
  font-size: 12px;
}
</style>
