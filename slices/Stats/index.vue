<template>
  <div class="relative bg-gray-800">
    <div class="h-56 bg-indigo-600 sm:h-72 md:absolute md:left-0 md:h-full md:w-1/2">
      <img
        class="w-full h-full object-cover"
        src="https://source.unsplash.com/-2vD8lIhdnw/1600x900"
        alt="Support team"
      />
    </div>
    <div class="relative max-w-screen-xl mx-auto px-4 py-12 sm:px-6 lg:px-8 lg:pb-24">
      <div class="md:ml-auto md:w-1/2 md:pl-16">
        <span
          class="text-sm leading-6 font-semibold uppercase tracking-wider text-gray-300"
        >June 15th - August 7th, 2020</span>
        <h2
          class="text-white text-4xl leading-9 font-extrabold tracking-tight sm:text-4xl sm:leading-10"
        >Courses</h2>
        <div class="flex w-full mt-12">
          <div class="flex-1">
            <h3 class="text-gray-100 font-bold text-2xl uppercase mb-1">Middle School</h3>
            <ul class="list-inside text-gray-100 list-disc leading-8 text-lg">
              <li>Essay writing</li>
              <li>Grammar</li>
              <li>Reading</li>
            </ul>
          </div>
          <div class="flex-1">
            <h3 class="text-gray-100 font-bold text-2xl uppercase mb-1">High School</h3>
            <ul class="list-inside text-gray-100 list-disc leading-8 text-lg">
              <li>Essay writing</li>
              <li>Grammar</li>
              <li>Reading</li>
            </ul>
          </div>
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
