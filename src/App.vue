<template>
  <v-app>
 <eheader></eheader>

    <v-content>
      <HelloWorld/>
    </v-content>
  </v-app>
</template>

<script>
// import HelloWorld from './components/HelloWorld';
import eheader from '@/components/partials/nav2'

export default {
  name: 'App',

  components: {
    eheader
  },

  data: () => ({
    //
  }),
};
</script>
