<template>
  <div class="bg-gray-800">
    <div
      class="container py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between"
    >
      <div>
        <h2
          class="text-3xl leading-9 font-extrabold tracking-tight text-gray-200 sm:text-4xl sm:leading-10 mb-3"
        >
          <div class="block mb-6">
            <span class="text-grey-20 border-b-4 border-gray-600">2020</span>
          </div>여름 집중 수업 일정 업데이트
        </h2>
        <p
          class="text-lg text-gray-200 leading-6"
        >We are dedicated to our student and immensely proud of our SAT and ACT preparatory services.</p>
      </div>
      <div class="mt-8 flex lg:flex-shrink-0 lg:mt-0">
        <div class="inline-flex rounded-md shadow">
          <a
            href="#"
            class="w-full flex items-center justify-center px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-indigo-500 hover:bg-indigo-400 focus:outline-none focus:bg-indigo-400 transition duration-150 ease-in-out"
          >지금 등록하십시오</a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    slice: {
      type: Object,
      required: true,
      default: () => {}
    }
  },
  computed: {}
}
</script>

<style  lang="scss">
@import 'swiper/css/swiper.css';
</style>
