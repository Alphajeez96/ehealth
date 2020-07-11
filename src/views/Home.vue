<template>
  <div class="home">
<dashboard></dashboard>
  </div>
</template>

<script>
// @ is an alias to /src

import dashboard from '@/components/home/dashboard'

export default {
  name: 'Home',
  components: {
  dashboard
  }
}
</script>
