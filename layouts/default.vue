<template>
  <div id="site-canvas">
    <scroll></scroll>
    <navigation class="container mx-auto border-b border-gray" :data="$store.state.navigation"></navigation>
    <nuxt />
    <a-footer></a-footer>
  </div>
</template>

<script>
import navigation from '~/components/static/navigation.vue'
import aFooter from '~/components/static/Footer.vue'
import Scroll from '~/components/static/Scroll.vue'

export default {
  components: {
    navigation,
    aFooter,
    Scroll
  }
}
</script>
