<template>
  <!-- <span class="text-red">{{ buttonObject.link_type }}</span> -->
  <a
    v-if="buttonObject.link_type == 'Web'"
    :class="buttonClass"
    :href="buttonObject.url"
    target="_blank"
    :rel="noFollowValue(buttonObject.url)"
  >
    <!-- <span class="text-green">Web link: {{ buttonObject }}</span> -->
    <slot></slot>
  </a>
  <a v-else-if="buttonObject.link_type == 'Media'" :class="buttonClass" :href="buttonObject.url">
    <!-- <span class="text-teal">Media link: {{ buttonObject }}</span> -->
    <slot></slot>
  </a>
  <nuxt-link
    v-else-if="buttonObject.link_type == 'Document'"
    :to="url(buttonObject)"
    :class="buttonClass"
  >
    <slot></slot>
  </nuxt-link>
  <a v-else href="#">
    <slot></slot>
  </a>
</template>
<script>
import UIDReplace from '~/components/mixins/UIDReplace.js'

export default {
  mixins: [UIDReplace],
  props: {
    buttonObject: {
      type: Object,
      required: false,
      default: () => []
    },
    buttonContent: {
      type: String,
      required: false,
      default: ''
    },
    buttonClass: {
      type: Array,
      required: false,
      default: () => []
    }
  },
  computed: {},
  methods: {
    noFollowValue(url) {
      if (url.indexOf('brightworld') > -1) {
        return false
      } else {
        return 'no-follow'
      }
    }
  }
}
</script>

