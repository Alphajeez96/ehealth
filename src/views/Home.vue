<template>
  <div class="home">
    <dashboard></dashboard>
  </div>
</template>

<script>
import dashboard from '@/components/home/dashboard'
// TODO:Handle error with izitoast
//TODO: Store users to local storage
//TODO: display something in the dashboard carrds

export default {
  name: 'Home',
  components: {
    dashboard,
  },
}
</script>
