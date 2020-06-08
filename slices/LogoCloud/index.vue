<template>
  <div class="bg-white container mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
    <h2
      class="text-center text-2xl leading-6 font-semibold text-gray-600"
    >We have helped our students to get accepted into the following universities</h2>
    <div class="py-12">
      <div class="grid grid-cols-2 gap-8 md:grid-cols-6 lg:grid-cols-5">
        <div class="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
          <img class="h-12" src="~assets/statickit-logo.svg" alt="Static Kit" />
        </div>
        <div class="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
          <img class="h-12" src="~assets/statickit-logo.svg" alt="Static Kit" />
        </div>
        <div class="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
          <img class="h-12" src="~assets/statickit-logo.svg" alt="Static Kit" />
        </div>
        <div class="col-span-1 flex justify-center md:col-span-3 lg:col-span-1">
          <img class="h-12" src="~assets/statickit-logo.svg" alt="Static Kit" />
        </div>
        <div class="col-span-2 flex justify-center md:col-span-3 lg:col-span-1">
          <img class="h-12" src="~assets/statickit-logo.svg" alt="Static Kit" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ['slice'],
  computed: {
    endpoint() {
      return this.$prismic && this.$prismic.apiEndpoint
        ? this.$prismic.apiEndpoint
            .split('/')
            .slice(0, -2)
            .join('/')
            .replace('cdn.', '')
        : null
    }
  }
}
</script>
<style scoped>
.section {
  position: relative;
  background: #ffff63;
  color: #111;
  padding: 4em;
  text-align: center;
}
a {
  color: #111;
}
</style>
