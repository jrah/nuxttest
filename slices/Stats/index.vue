<template>
  <div :id="idRef" class="bg-indigo-900">
    <div class="container mx-auto py-12 px-4 sm:py-16 sm:px-6 lg:px-8 lg:py-20">
      <div class="max-w-4xl mx-auto text-center mb-12">
        <span class="text-white text-sm">Hosting Price</span>
        <h2 class="text-3xl leading-9 font-extrabold text-white sm:text-4xl sm:leading-10">호스팅 비용 안내</h2>
        <p
          class="mt-3 text-xl leading-7 text-indigo-200 sm:mt-4"
        >Vue119는 컨텐츠 관리 시스템(CMS)기반으로 Netlify를 사용하여 보다 편하고 저렴하게 홈페이지를 관리 할 수 있도록 도와드립니다.</p>
      </div>
      <dl class="mt-10 mx-auto text-center flex flex-wrap justify-center mx-auto">
        <div
          class="flex flex-col px-6 mb-6 sm:mb-0 last:mb-0 sm:w-1/3 sm:max-w-xs relative"
          v-for="(item, i) in this.list"
          :key="i"
        >
          <dt class="order-2 mt-2 text-lg leading-6 font-medium text-indigo-200">{{item.content}}</dt>
          <dd class="order-1 text-2xl leading-none font-extrabold text-white">{{item.heading}}</dd>

          <div v-if="i !== 0" class="sm:border absolute left-0" style="top: 20px; bottom: 20px;"></div>
        </div>
      </dl>
    </div>
  </div>
</template>
<script>
export default {
  props: ['slice'],
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
      list: [
        {
          heading: 'Prismic (CMS)',
          content: '무료'
        },
        {
          heading: 'Netlify Hosting',
          content: '무료(게시글 등록 및 팝업수정시 추가금액 발생)'
        },
        {
          heading: 'JavaScript',
          content: '빠르고 안정적인 반응속도'
        }
      ]
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
