<template>
  <a id="return-top" v-scroll-to="'#site-canvas'" href="#">Top</a>
</template>

<script>
export default {}
</script>


<style lang="scss">
#return-top {
  @apply bg-black;
  @apply fixed;
  @apply w-12;
  @apply h-12;
  @apply text-gray-300;
  @apply flex;
  @apply items-center;
  @apply justify-center;
  bottom: 3em;
  right: 3em;
  @apply z-20;
}
</style>