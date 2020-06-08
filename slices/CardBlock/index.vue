<template>
  <div>
    <pre class="cardblock">{{slice}}</pre>
    <div class="swiper-wrapper"></div>
  </div>
</template>
<script>
export default {
  props: {
    slice: {
      type: Object,
      required: true
    }
  },
  computed: {}
}
</script>

<style  lang="scss">
@import 'swiper/css/swiper.css';

.cardblock {
  background-color: blue;
}
.swiper-wrapper {
  background-color: #fab;
}
</style>
