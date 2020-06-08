<template>
  <div>
    <h1 class="hidden">{{page.data.heading[0].text}}</h1>
    <SliceZone type="page" :uid="'index'" :slices="page.data.body" />
  </div>
</template>

<script>
import SliceZone from 'vue-slicezone'

export default {
  components: {
    SliceZone
  },
  head() {
    return {
      title: this.page.data.meta_title || 'Vue 119',
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        {
          hid: 'description',
          name: 'description',
          content: this.page.data.meta_description
        }
      ],

      htmlAttrs: {
        lang: this.page.lang
      }
    }
  },
  async asyncData({ $prismic, store, app }) {
    let uid = 'index'
    let selectedLanguage = 'ko-kr'

    const parmas = app.context.route.params
    if ('slug' in parmas) {
      uid = parmas.slug
    }
    if ('lang' in parmas) {
      selectedLanguage = parmas.lang
    }

    const menu = await $prismic.api.getByUID('menu', 'menu', {
      lang: selectedLanguage
    })
    store.commit('setNavigation', menu)
    // $prismic is injected here by '@nuxtjs/prismic' dependency. Slice machine does handle async but need access for non-slice content.
    const page = await $prismic.api.getByUID('page', uid, {
      lang: selectedLanguage
    })
    return { page }
  }
}
</script>
