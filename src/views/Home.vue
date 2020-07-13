<template>
  <div class="home">
    <dashboard></dashboard>
  </div>
</template>

<script>
import dashboard from '@/components/home/dashboard'
// TODO:Handle error with izitoast
//TODO: display something in the dashboard carrds
//TODO: configure PWA to carry correct logo
//TODO: configure Header icon to carry correct logo

export default {
  name: 'Home',
  components: {
    dashboard,
  },
}
</script>
