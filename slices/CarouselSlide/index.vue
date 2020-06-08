<template>
  <section class="section">
    <div v-swiper:mySwiper="swiperOption">
      <div class="swiper-wrapper relative">
        <div class="swiper-slide" :key="i" v-for="(banner, i) in slice.items">
          <prismic-rich-text
            class="rich-text absolute inset-0 flex justify-center ml-24 text-white flex-col"
            :field="banner.rich_text"
          />
          <img :src="banner.image.url" />
        </div>
      </div>
      <div class="swiper-button-prev" slot="button-prev"></div>
      <div class="swiper-button-next" slot="button-next"></div>
      <div class="swiper-pagination"></div>
      <!--<div class="absolute top-0 z-40 hidden">
        <span
          class="block text-black bg-white"
          :class="`swiper-annotation-${index}`"
          :key="index"
          role="button"
          v-for="(banner, index) in banners"
          tabindex="0"
          :aria-label="`Go to slide ${index}`"
          @click="clickSlide(index)"
        >{{banner.richText}}{{clickSlide(index)}}</span>
      </div>-->
    </div>

    <!--<pre>{{slice}}</pre> -->
  </section>
</template>
<script>
import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper'
// import 'swiper/css/swiper.css'

export default {
  props: {
    slice: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      banners: [
        {
          richText:
            '2020 NEW BESPOKE 런칭 새로운 컬러, 업그레이드된 스펙 BESPOKE 신제품을 지금 바로 만나보세요',
          image:
            'https://images.prismic.io/vue119/2a51cc59-f6f6-4f2e-9842-013480d39c2d_200521_KV_QLED8K_PC_19200x810.jpg?auto=compress,format'
        },
        {
          richText:
            '2020 NEW BESPOKE 런칭 새로운 컬러, 업그레이드된 스펙 BESPOKE 신제품을 지금 바로 만나보세요',
          image:
            'https://images.prismic.io/vue119/b91a168b-0ba3-4429-b9ab-bc5039472c73_20200501_galaxy-z-flip_gold_MainKV_PC_bg.webp?auto=compress,format'
        },
        {
          richText:
            '2020 NEW BESPOKE 런칭 새로운 컬러, 업그레이드된 스펙 BESPOKE 신제품을 지금 바로 만나보세요',
          image:
            'https://images.prismic.io/vue119/2a51cc59-f6f6-4f2e-9842-013480d39c2d_200521_KV_QLED8K_PC_19200x810.jpg?auto=compress,format'
        }
      ],
      swiperOption: {
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        },
        autoPlay: {
          delay: 5000
        }
      }
      // ...
    }
  },
  methods: {
    clickSlide(index, swiper, $mySwiper, mySwiper) {
      console.log(index)
      console.log(this.mySwiper)
      console.log(this.mySwiper)

      return index
    }
  },
  updated() {},
  mounted() {
    // console.log('Current Swiper instance object', this.mySwiper.slideTo),
    // this.mySwiper.slideTo(3, 1000, false)
    console.log(
      'Swiper instances:',
      this.$swiper,
      this.secondSwiper,
      this.thirdSwiper,
      this.fourthSwiper
    )
  },
  components: {
    Swiper,
    SwiperSlide
  },
  directives: {
    swiper: directive
  },
  computed: {
    endpoint() {
      return this.$prismic && this.$prismic.apiEndpoint
        ? this.$prismic.apiEndpoint
            .split('/')
            .slice(0, -2)
            .join('/')
            .replace('cdn.', '')
        : null
    },
    swiperObj() {
      return this.$refs.mySwiper.$swiper
    }
  }
}
</script>

<style lang="scss">
/* purgecss start ignore */

@import '~assets/scss/mixins';
// @import 'swiper/swiper.scss';

.swiper-pagination-bullet {
  background: #fab700;
}

.swiper {
  &-button-next,
  &-button-prev {
    display: none;
    @apply text-white;
    @include mq(sm) {
      display: block;
    }
  }
  &-pagination {
    &-bullet {
      width: 16px;
      height: 16px;
      @apply bg-gray-400;
      opacity: 0.5;
      &-active {
        opacity: 1;
        background-color: white;
      }
    }
  }
  &-container-horizontal > &-pagination-bullets &-pagination-bullet {
    @include mq(sm) {
      margin: 0 4px;
    }
    margin: 0 8px;
  }
}
/* purgecss end ignore */
</style>
