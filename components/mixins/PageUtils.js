export default {
  computed: {
    hasHeaderImage() {
      if (this.document && this.document.data.header_type === 'short') {
        if (this.document && this.document.data.header_image) {
          if (this.document.data.header_image.url) {
            return this.document.data.header_image.url
          }
          if (
            this.document.data.header_image.large &&
            this.document.data.header_image.large.url
          ) {
            return this.document.data.header_image.large.url
          }
          if (typeof this.document.data.header_image === 'string') {
            return this.document.data.header_image
          }
        } else if (
          this.document &&
          this.document.data.header_type === undefined
        ) {
          return false
        }
      }
      return false
    }
  },
  mounted() {
    this.$store.commit('setHeader', this.hasHeaderImage)
  }
}

// hasHeaderImage() {
//   if (this.document && this.document.data.header_image) {
//     if (this.document.data.header_image.url) {
//       return this.document.data.header_image.url
//     }
//     if (
//       this.document.data.header_image.large &&
//       this.document.data.header_image.large.url
//     ) {
//       return this.document.data.header_image.large.url
//     }
//     if (typeof this.document.data.header_image === 'string') {
//       return this.document.data.header_image
//     }
//   }
//   return false
// }
