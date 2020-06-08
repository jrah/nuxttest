<template>
  <div>
    <navigation :data="$store.state.navigation"></navigation>
    <nuxt />
    <a-footer></a-footer>
  </div>
</template>

<script>
import navigation from '~/components/static/navigation.vue'
import aFooter from '~/components/static/Footer.vue'

export default {
  components: {
    navigation,
    aFooter
  }
}
</script>