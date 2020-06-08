<template>
  <div :id="idRef">
    <div v-if="slice.primary.slice_variation === 'B'">
      <div class="container py-12">
        <div class="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center">
            <h2
              class="text-3xl leading-9 font-extrabold text-gray-900 sm:text-4xl sm:leading-10 lg:text-5xl lg:leading-none"
            >Our Process</h2>
            <p
              class="mt-4 text-xl leading-7 text-gray-600"
            >If you're not satisfied, contact us within the first 14 days and we'll send you a full refund.</p>
          </div>
        </div>
        <div class="flex justify-center flex-wrap bars mt-12">
          <div
            v-for="(step, i) in this.steps"
            :key="i"
            class="lg:w-1/4 sm:w-1/2 w-full text-center max-w-xs bar mb-6"
          >
            <div class="bg-indigo-800 text-white py-4 text-lg rounded mx-1 bar-ticket shadow-sm">
              <span class="block">{{i + 1}}</span>
            </div>
            <div class="px-6">
              <h3 class="my-4 text-2xl font-bold text-indigo-700">{{step.heading}}</h3>

              <p>{{step.content}}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-else class="bg-gray-800">
      <div class="container flex flex-wrap items-center py-12">
        <div class="w-full lg:w-1/2">
          <h2 class="block text-3xl text-white">
            디자인부터 개발까지
            <br />Website119와 함께 하세요!
          </h2>
          <p class="max-w-md mt-6 text-gray-200">웹과 모바일 어느 화면에서도 쉽게 접근 가능하며, 컨텐츠 관리가 가능한 관리자 기능 제공</p>
        </div>
        <div class="w-full lg:w-1/2 mt-12 lg:mt-0">
          <h3 class="text-white mb-3 uppercase text-2xl">Our Services</h3>
          <div class="grid grid-cols-2 sm:grid-cols-3 gap-4">
            <div
              v-for="(item, i) in this.features"
              :key="i"
              class="flex items-center flex-auto text-white p-4 cursor-default rounded-md hover:bg-gray-700"
            >
              <font-awesome-icon icon="check" class="mr-2" />
              {{item}}
            </div>
          </div>
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
  computed: {
    idRef() {
      return (
        this.slice.primary.heading[0].text.replace(/ /g, '-').toLowerCase() ||
        this.slice.primary.slice_variation ||
        'noid'
      )
    }
  },

  data() {
    return {
      features: [
        '네이버 서치어드바이저',
        '관리자 화면',
        '다국어지원',
        '반응형 페이지',
        '팝업 관리',
        'SSL 인증서',
        '공지사항/게시판',
        '호스팅 제공',
        '모바일화면 제공'
      ],
      steps: [
        {
          heading: 'Meeting',
          icon: 'letter',
          content: 'We listen to your goals through video chat or email'
        },
        {
          heading: 'Coding & Design',
          icon: 'letter',
          content: 'Tailored design work and coding to your needs'
        },
        {
          heading: 'SEO Manangement',
          icon: 'letter',
          content:
            'Exposure on both Naver and Google using skilled SEO knowledge.'
        },
        {
          heading: 'Post Launch Service',
          icon: 'letter',
          content:
            'Management is also included for basic text change, hosting, training and domain registration'
        }
      ]
    }
  }
}
</script>

<style lang="scss">
.bg-scale {
  position: relative;
  @apply bg-indigo-900;
  ::before {
    content: '';
    position: absolute;
    display: block;
    background-color: #fff;
    width: 100%;
    height: 100%;
    transform: scale3d(1.2, 1.45, 1);
    z-index: -1;
    opacity: 0;
    transition: opacity 0.2s ease, transform 0.2s ease-in-out;
    transform: scale3d(1.3, 1.45, 1);
  }
  &:hover {
    // @apply bg-indigo-700;
    ::before {
      transform: scale3d(1.5, 1.65, 1);
    }
  }
}

.bar {
  &s {
    .bar:first-child {
      .bar-ticket {
        &:before {
          display: none;
        }
      }
    }
    .bar:last-child {
      .bar-ticket {
        &:after {
          display: none;
        }
      }
    }
  }

  &-ticket {
    position: relative;
    &::after {
      content: '';
      position: absolute;
      z-index: 20;
      right: -6px;
      top: calc(50% - 10px);
      width: 20px;
      height: 20px;
      transform: rotate(45deg);
      border-radius: 3px;
      @apply bg-indigo-800;
    }
    &::before {
      content: '';
      position: absolute;
      z-index: 10;
      left: -12px;
      top: calc(50% - 10px);
      width: 20px;
      height: 20px;
      transform: rotate(45deg);
      border-radius: 3px;
      @apply bg-white;
    }
  }
}
</style>