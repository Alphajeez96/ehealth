<template>
  <v-app>
    <eheader></eheader>
    <v-content>
    </v-content>
  </v-app>
</template>

<script>
import eheader from '@/components/partials/navbar'

export default {
  name: 'App',

  components: {
    eheader,
  },

  data: () => ({
    //
  }),
}
</script>
