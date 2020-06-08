<template>
  <div :id="idRef" class="py-12 relative">
    <div class="hidden lg:block lg:absolute lg:inset-0 overflow-y-hidden">
      <div class="mx-auto max-w-6xl">
        <svg
          class="transform -translate-x-1 translate-y-24"
          style="z-index: -10;"
          width="640"
          height="784"
          fill="none"
          viewBox="0 0 640 784"
        >
          <defs>
            <pattern
              id="9ebea6f4-a1f5-4d96-8c4e-4c2abf658047"
              x="118"
              y="0"
              width="20"
              height="20"
              patternUnits="userSpaceOnUse"
            >
              <rect x="0" y="0" width="4" height="4" class="text-gray-200" fill="currentColor" />
            </pattern>
          </defs>
          <rect y="72" width="640" height="640" class="text-gray-100" fill="currentColor" />
          <rect x="118" width="404" height="784" fill="url(#9ebea6f4-a1f5-4d96-8c4e-4c2abf658047)" />
        </svg>
      </div>
    </div>
    <div class="max-w-2xl mx-auto text-center mb-12 relative">
      <h2
        class="text-3xl leading-9 font-extrabold text-grey-800 sm:text-4xl sm:leading-10"
      >웹사이트 제작에 관한 문의 또는 상담</h2>
      <p
        class="mt-3 text-xl leading-7 text-grey-800 sm:mt-4"
      >저희 팀은 당신의 문의 사항에 성실히 답해들겠습니다. 양식을 작성해주시면 최대한 빨리 답변 드리도록 노력하겠습니다.</p>
    </div>
    <div class="relative max-w-6xl mx-auto lg:grid lg:grid-cols-5">
      <div class="px-4 sm:px-6 lg:col-span-3 lg:px-8 xl:pl-12">
        <div class="bg-white mx-auto p-6 lg:shadow-lg lg:rounded-sm">
          <form action="#" method="POST">
            <div class="grid grid-cols-1 row-gap-6">
              <div v-for="(input, i) in this.inputs" :key="i" class="flex items-center">
                <label class="w-1/5 text-gray-700" :for="input.name">{{input.name}}</label>
                <div class="relative rounded-md shadow-sm w-full">
                  <textarea
                    v-if="input.type === 'textarea'"
                    id="message"
                    rows="4"
                    class="form-input block w-full py-3 px-4 placeholder-gray-500 transition ease-in-out duration-150 border-gray-300 leading-6 border rounded-md bg-white focus:outline-none focus:shadow-outline"
                    :placeholder="input.name"
                  ></textarea>
                  <input
                    v-else
                    :id="input.name"
                    class="form-input block w-full py-3 px-4 placeholder-gray-500 transition ease-in-out duration-150 border-gray-300 leading-6 border rounded-md bg-white focus:outline-none focus:shadow-outline"
                    :placeholder="input.name"
                  />
                </div>
              </div>
            </div>
            <div class>
              <span class="flex justify-end mt-6">
                <button
                  type="submit"
                  class="inline-flex justify-center py-3 px-6 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out"
                >Submit</button>
              </span>
            </div>
          </form>
        </div>
      </div>
      <div class="px-4 sm:px-6 lg:col-span-2 lg:px-8 xl:pr-12 flex items-center max-w-lg">
        <div class>
          <h3
            class="text-2xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-3xl sm:leading-9"
          >Get in touch</h3>
          <p
            class="mt-3 text-lg leading-6 text-gray-500"
          >Nullam risus blandit ac aliquam justo ipsum. Quam mauris volutpat massa dictumst amet. Sapien tortor lacus arcu.</p>
          <dl class="mt-8 text-base leading-6 text-gray-500">
            <div>
              <dt class="sr-only">Postal address</dt>
              <dd>
                <p>742 Evergreen Terrace</p>
                <p>Springfield, OR 12345</p>
              </dd>
            </div>
            <div class="mt-6">
              <dt class="sr-only">Phone number</dt>
              <dd class="flex">
                <svg
                  class="flex-shrink-0 h-6 w-6 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <span class="ml-3">+1 (555) 123-4567</span>
              </dd>
            </div>
            <div class="mt-3">
              <dt class="sr-only">Email</dt>
              <dd class="flex">
                <svg
                  class="flex-shrink-0 h-6 w-6 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <span class="ml-3">support@example.com</span>
              </dd>
            </div>
          </dl>
          <p class="mt-6 text-base leading-6 text-gray-500">
            Looking for careers?
            <a
              href="#"
              class="font-medium text-gray-700 underline"
            >View all job openings</a>.
          </p>
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
      required: true
    }
  },
  data() {
    return {
      inputs: [
        {
          name: '성함',
          type: 'input'
        },
        {
          name: '연락처',
          type: 'input'
        },
        {
          name: '웹사이트',
          type: 'input'
        },
        {
          name: '이메일',
          type: 'input'
        },
        {
          name: '회사명',
          type: 'input'
        },
        {
          name: '메시지',
          type: 'textarea'
        }
      ]
    }
  },
  computed: {
    idRef() {
      return (
        this.slice.primary.heading[0].text.replace(/\s/g, '-').toLowerCase() ||
        this.slice.primary.slice_variation ||
        'noid'
      )
    }
  }
}
</script>

<style>
</style>