<template>
  <div class="relative bg-white">
    <div class="flex justify-between items-center px-4 py-6 sm:px-6 md:justify-start md:space-x-10">
      <div>
        <a href="/" class="flex">
          <img class="h-8 w-auto sm:h-10" src="~assets/logo.svg" alt="Workflow" />
        </a>
      </div>
      <div class="-mr-2 -my-2 md:hidden">
        <button
          type="button"
          @click="isOpen = !isOpen"
          class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
        >
          <svg class="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
      <div class="hidden md:flex-1 md:flex md:items-center md:justify-between md:space-x-12">
        <nav class="flex space-x-10">
          <u-link
            v-for="(link, i) in data.data.body"
            :key="i"
            class="text-base leading-6 font-medium text-gray-500 hover:text-gray-900 focus:outline-none focus:text-gray-900 transition ease-in-out duration-150"
            :button-object="link.primary.nav_link"
          >{{ link.primary.link_text }}</u-link>
        </nav>
        <div class="flex items-center space-x-8">
          <a
            href="/en-gb"
            class="text-base leading-6 font-medium text-gray-500 hover:text-gray-900 focus:outline-none focus:text-gray-900 transition ease-in-out duration-150"
          >English</a>
          <a
            href="/ko-kr"
            class="text-base leading-6 font-medium text-gray-500 hover:text-gray-900 focus:outline-none focus:text-gray-900 transition ease-in-out duration-150"
          >한국어</a>
          <span class="inline-flex rounded-md shadow-sm">
            <a
              href="#"
              class="inline-flex items-center justify-center px-4 py-2 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition ease-in-out duration-150"
            >로그인</a>
          </span>
        </div>
      </div>
    </div>

    <!--
    Mobile menu, show/hide based on mobile menu state.

    Entering: "duration-200 ease-out"
      From: "opacity-0 scale-95"
      To: "opacity-100 scale-100"
    Leaving: "duration-100 ease-in"
      From: "opacity-100 scale-100"
      To: "opacity-0 scale-95"
    -->
    <transition
      enter-active-class="transition ease-out duration-100 transform"
      enter-class="opacity-0 scale-95"
      enter-to-class="opacity-100 scale-100"
      leave-active-class="transition ease-in duration-75 transform"
      leave-class="opacity-100 scale-100"
      leave-to-class="opacity-0 scale-95"
    >
      <div
        v-if="isOpen"
        class="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden z-10"
      >
        <div class="rounded-lg shadow-lg">
          <div class="rounded-lg shadow-xs bg-white divide-y-2 divide-gray-50">
            <div class="pt-5 pb-6 px-5 space-y-6">
              <div class="flex items-center justify-between">
                <div>
                  <img class="h-8 w-auto" src="~assets/logo.svg" alt="Workflow" />
                </div>
                <div class="-mr-2">
                  <button
                    type="button"
                    @click="isOpen = false"
                    class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
                  >
                    <svg class="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>
              </div>
              <div>
                <nav class="grid gap-6">
                  <u-link
                    v-for="(link, i) in data.data.body"
                    :key="i"
                    class="-m-3 p-3 flex items-center space-x-4 rounded-lg hover:bg-gray-50 transition ease-in-out duration-150"
                    :button-object="link.primary.nav_link"
                  >
                    <div
                      class="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-indigo-500 text-white"
                    >
                      <svg class="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                        />
                      </svg>
                    </div>
                    <div
                      class="text-base leading-6 font-medium text-gray-900"
                    >{{link.primary.link_text}}</div>
                  </u-link>
                </nav>
              </div>
            </div>
            <div class="py-6 px-5 space-y-6">
              <div class="space-y-6">
                <span class="w-full flex rounded-md shadow-sm">
                  <a
                    href="#"
                    class="w-full flex items-center justify-center px-4 py-2 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition ease-in-out duration-150"
                  >로그인</a>
                </span>
                <p class="text-center text-base leading-6 font-medium text-gray-500">
                  Existing customer?
                  <a
                    href="#"
                    class="text-indigo-600 hover:text-indigo-500 transition ease-in-out duration-150"
                  >주문/배송 조회</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
const uLink = () => import('~/components/utils/link.vue')
export default {
  components: {
    uLink
  },
  data() {
    return {
      isOpen: false,
      falseStatement: false
    }
  },

  props: {
    data: {
      type: Object,
      required: true
    }
  }
}
</script>
