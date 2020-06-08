<template>
  <div :id="idRef">
    <div v-if="slice.primary.slice_variation === 'B'" class="bg-gray-100">
      <div class>
        <div class="pt-12 sm:pt-16 lg:pt-20">
          <div class="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center">
              <h2
                class="text-3xl leading-9 font-extrabold text-gray-900 sm:text-4xl sm:leading-10 lg:text-5xl lg:leading-none"
              >Simple no-tricks pricing</h2>
              <p
                class="mt-4 text-xl leading-7 text-gray-600"
              >If you're not satisfied, contact us within the first 14 days and we'll send you a full refund.</p>
            </div>
          </div>
        </div>
        <div class="mt-8 bg-white pb-16 sm:mt-12 sm:pb-20 lg:pb-28">
          <div class="relative">
            <div class="absolute inset-0 h-56 bg-gray-100"></div>
            <div class="relative container">
              <div class="rounded-lg shadow-lg overflow-hidden lg:max-w-none lg:flex">
                <div class="bg-white px-6 py-8 lg:flex-shrink-1 lg:p-12">
                  <h3
                    class="text-2xl leading-8 font-extrabold text-gray-900 sm:text-3xl sm:leading-9"
                  >Lifetime Membership</h3>
                  <p
                    class="mt-6 text-base leading-6 text-gray-500"
                  >Lorem ipsum dolor sit amet consect etur adipisicing elit. Itaque amet indis perferendis blanditiis repellendus etur quidem assumenda.</p>
                  <div class="mt-8">
                    <div class="flex items-center">
                      <h4
                        class="flex-shrink-0 pr-4 bg-white text-sm leading-5 tracking-wider font-semibold uppercase text-indigo-600"
                      >What's included</h4>
                      <div class="flex-1 border-t-2 border-gray-200"></div>
                    </div>
                    <ul class="mt-8 lg:grid lg:grid-cols-2 lg:col-gap-8 lg:row-gap-5">
                      <li class="flex items-start lg:col-span-1">
                        <div class="flex-shrink-0">
                          <svg
                            class="h-5 w-5 text-green-400"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                              clip-rule="evenodd"
                            />
                          </svg>
                        </div>
                        <p class="ml-3 text-sm leading-5 text-gray-700">Private forum access</p>
                      </li>
                      <li class="mt-5 flex items-start lg:col-span-1 lg:mt-0">
                        <div class="flex-shrink-0">
                          <svg
                            class="h-5 w-5 text-green-400"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                              clip-rule="evenodd"
                            />
                          </svg>
                        </div>
                        <p class="ml-3 text-sm leading-5 text-gray-700">Member resources</p>
                      </li>
                      <li class="mt-5 flex items-start lg:col-span-1 lg:mt-0">
                        <div class="flex-shrink-0">
                          <svg
                            class="h-5 w-5 text-green-400"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                              clip-rule="evenodd"
                            />
                          </svg>
                        </div>
                        <p class="ml-3 text-sm leading-5 text-gray-700">Entry to annual conference</p>
                      </li>
                      <li class="mt-5 flex items-start lg:col-span-1 lg:mt-0">
                        <div class="flex-shrink-0">
                          <svg
                            class="h-5 w-5 text-green-400"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                              clip-rule="evenodd"
                            />
                          </svg>
                        </div>
                        <p class="ml-3 text-sm leading-5 text-gray-700">Official member t-shirt</p>
                      </li>
                    </ul>
                  </div>
                </div>
                <div
                  class="py-8 px-6 text-center bg-gray-100 lg:flex-shrink-0 lg:flex lg:flex-col lg:justify-center lg:p-12 flex-grow"
                >
                  <p class="text-lg leading-6 font-medium text-gray-900">Pay once, own it forever</p>
                  <div
                    class="mt-4 flex items-center justify-center text-5xl leading-none font-extrabold text-gray-900"
                  >
                    <span>$349</span>
                    <span class="ml-3 text-xl leading-7 font-medium text-gray-500">USD</span>
                  </div>
                  <p class="mt-4 text-sm leading-5">
                    <a
                      href="#"
                      class="font-medium text-gray-500 underline"
                    >Learn about our membership policy</a>
                  </p>
                  <div class="mt-6">
                    <div class="rounded-md shadow">
                      <a
                        href="#"
                        class="flex items-center justify-center px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-gray-900 hover:bg-gray-800 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out"
                      >Get Access</a>
                    </div>
                  </div>
                  <div class="mt-4 text-sm leading-5">
                    <a href="#" class="font-medium text-gray-900">
                      Get a free sample
                      <span class="font-normal text-gray-500">(20MB)</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-else class="relative bg-white overflow-hidden">
      <div class="container">
        <div
          class="relative lg:z-10 py-8 bg-white sm:py-16 md:py-20 sm:max-w-xl lg:max-w-2xl xl:max-w-3xl lg:w-full lg:py-28 xl:py-32"
        >
          <svg
            class="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2"
            fill="currentColor"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            <polygon points="50,0 100,0 50,100 0,100" />
          </svg>

          <div class="mx-auto max-w-screen-x">
            <div class="sm:text-center lg:text-left">
              <span>다양한 기능 · 맞춤형 솔루션</span>
              <h2
                class="text-4xl tracking-tight leading-10 font-extrabold text-gray-900 sm:text-5xl sm:leading-none md:text-6xl"
              >
                디자인부터 개발까지
                <br class="xl:hidden" />
                <span class="text-indigo-600">홈페이지제작</span>
              </h2>
              <p
                class="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0"
              >
                Website119만의
                <br />체계적인 프로세스를 합리적인 가격을 만나보세요.
              </p>
              <div class="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div class="rounded-md shadow">
                  <a
                    href="#"
                    class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10"
                  >포토폴리오 보러가기</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <img
          class="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
          src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80"
          alt
        />
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
  computed: {
    idRef() {
      return (
        this.slice.primary.heading[0].text.replace(/ /g, '-').toLowerCase() ||
        this.slice.primary.slice_variation ||
        'noid'
      )
    }
  }
}
</script>

<style  lang="scss">
@import 'swiper/css/swiper.css';
</style>
