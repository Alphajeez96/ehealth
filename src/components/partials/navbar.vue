<template>
  <nav>
    <v-toolbar app>
      <v-app-bar-nav-icon
        class="grey--text"
        @click="drawer = !drawer"
      ></v-app-bar-nav-icon>
      <v-toolbar-title class="text-uppercase grey--text">
        <span class="font-weight-light">e</span>
        <span>Health</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>

      <!-- <v-menu offset-y>
        <template v-slot:activator="{ on }">
          <v-btn color="primary" flat v-on="on" class="mx-3">
            <v-icon left></v-icon>
            <span>Menu</span>
          </v-btn>
        </template>
        <v-list>
          <v-list-item
            v-for="item in items"
            :key="item.text"
            router
            :to="item.route"
          >
            <v-list-item-title>{{ item.text }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu> -->

      <!-- <v-btn flat class="grey">
        <span>Sign Out</span>
        <v-icon right>mdi person-arrow-right</v-icon>
      </v-btn> -->
    </v-toolbar>
    <v-navigation-drawer app color="black" v-model="drawer">
      <!-- <p>test</p> -->
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

          <v-flex class="mt-4 mb-3">
            <popup></popup>
          </v-flex>
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
import popup from './popup'
export default {
  components: {
    popup,
  },
  data() {
    return {
      drawer: false,
      item: 1,
      items: [
        { text: 'Dashboard', icon: 'mdi-home', route: '/' },
        { text: 'Users', icon: 'mdi-folder', route: '/projects' },
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
