<template>
  <div :id="idRef" class="container pt-12">
    <h2
      class="text-3xl leading-9 font-extrabold text-gray-800 sm:text-4xl sm:leading-10 text-center"
      v-if="slice.primary.heading.length > 0 && slice.primary.heading[0].text.length > 0"
    >{{ slice.primary.heading[0].text}}</h2>
    <div v-if="itemsPlural" class="py-6 flex justify-center flex-wrap mt-6 -mx-3 people-gallery">
      <div v-for="(item, i) in slice.items" :key="i" class="px-6">
        <img :src="item.image.url" alt="Image" class="max-w-xs w-full rounded-full" />
        <prismic-rich-text :field="item.rich_text" class="mt-6 text-center" />
      </div>
    </div>
    <div v-else class="py-6 flex mt-6 justify-center">
      <div v-for="(item, i) in slice.items" :key="i" class="px-3">
        <img :src="item.image.url" alt="Image" />
        <prismic-rich-text :field="item.rich_text" />
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
    itemPosition() {
      if (this.slice.items.length > 1) {
        return 'justify-between'
      }
      return 'justify-center'
    },
    itemsPlural() {
      if (this.slice.items.length > 1) {
        return true
      }
      return false
    },
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

<style lang="scss">
.people-gallery {
  img {
    max-width: 14rem;
  }
}
</style>