<!-- need to use picture with source, img so the image can be properly adjusted, use srcset for regular images -->
<!-- because it is not viable to do mobile first with Prismic, and smaller images need to be provided for small devices. We need to set max width on small devices (to replace not-small). -->

<template>
  <div :class="name">
    <!-- object keys -->
    <picture v-if="picture == true" :class="imageClass">
      <source
        v-for="(item, index) in imagePicture"
        :key="index"
        :srcset="item.url"
        :media="mediaQueryOrder(index)"
      />
      <img :srcset="imageShift.url" :alt="imageShift.alt" class="picture-img" />
    </picture>
    <img
      v-else-if="Object.values(image).length <= 4 && imagePicture.length < 1"
      v-lazy="lazyObj"
      :alt="lazyObj.alt"
      :class="imageClass"
    />
    <img
      v-else
      v-lazy="lazyObj"
      :alt="lazyObj.alt"
      :data-srcset="imagesArray"
      :class="`block default ${imageClass}`"
      sizes="(min-width: 48em) 1024w,
            (min-width: 60em and max-width: 90em) 1280w,
            (max-width: 90em) 1280w, 1280w"
    />
  </div>
</template>
<script>
export default {
  props: {
    image: {
      type: Object,
      required: true,
      default: () => []
    },
    picture: {
      type: Boolean,
      required: false,
      default: false
    },
    imageClass: {
      type: String,
      required: false,
      default: ''
    }
  },
  data() {
    return {
      lazyObj: {
        src: this.image.url,
        alt: this.image.alt
      },
      name: 'srcset'
    }
  },
  computed: {
    imageShift() {
      return this.image
    },
    created() {
      return console.log(`dxf: ${this.name}`)
    },
    imagePicture() {
      const item = []
      const keys = Object.keys(this.image)
      let i = 0
      // console.log(this.image)
      const ogimg = { alt: '', copyright: '', url: '', width: '', height: '' }
      for (const key of keys) {
        const img = { alt: '', copyright: '', url: '', width: '', height: '' }
        if (key === 'dimensions') {
          ogimg.width = this.image[key].width
          ogimg.height = this.image[key].height
        } else if (key === 'alt') {
          ogimg.alt = this.image[key]
        } else if (key === 'copyright') {
          ogimg.copyright = this.image[key]
        } else if (key === 'url') {
          ogimg.url = this.image[key]
        } else {
          img.alt = this.image[key].alt
          img.copyright = this.image[key].copyright
          img.url = this.image[key].url.split(',').join('%2C')
          img.width = this.image[key].dimensions.width
          img.height = this.image[key].dimensions.height
        }
        if (i > 2 && key !== 'url') {
          item.push(img)
        }
        ++i
      }
      return item
    },
    imagesArray() {
      const item = []
      const keys = Object.keys(this.image)
      let i = 0
      // console.log(this.image)
      const ogimg = { alt: '', copyright: '', url: '', width: '', height: '' }
      for (const key of keys) {
        const img = { alt: '', copyright: '', url: '', width: '', height: '' }
        if (key === 'dimensions') {
          ogimg.width = this.image[key].width
          ogimg.height = this.image[key].height
        } else if (key === 'alt') {
          ogimg.alt = this.image[key]
        } else if (key === 'copyright') {
          ogimg.copyright = this.image[key]
        } else if (key === 'url') {
          ogimg.url = this.image[key].replace(',', '%2C')
        } else {
          img.alt = this.image[key].alt
          img.copyright = this.image[key].copyright
          img.url = this.image[key].url.split(',').join('%2C')
          img.width = this.image[key].dimensions.width
          img.height = this.image[key].dimensions.height
        }
        if (i > 2 && key !== 'url') {
          item.push(img)
        }
        ++i
      }

      item.push(ogimg)
      // console.log(item)
      let srcset = ''
      item.forEach((elem, index) => {
        if (index === item.length - 1) {
          srcset += `${elem.url.split(',').join('%2C')} ${elem.width}w`
        } else {
          srcset += `${elem.url.split(',').join('%2C')} ${elem.width}w, `
        }
        // console.log(elem.width)
        // srcset += `${elem.url} ${elem.width}w, `
        // elem.url + ' ' + elem.width + ' ' + elem.height + ' ' + elem.alt + ','
        ++i
      })
      // console.log(srcset)
      return srcset
    },
    srcset() {
      const item = []
      const keys = Object.entries(this.image)
      for (const key of keys) {
        item.push(key)
      }
      const op = item.filter(data => data instanceof Object)
      return op
    }
  },
  methods: {
    mediaQueryOrder(i) {
      // if first index, then return media query, else second, etc.
      if (i === 0) {
        return '(max-width: 48em)'
      } else if (i === 1) {
        return '(min-width: 48em) and (max-width: 90em)'
      } else {
        return '(min-width: 90em)'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@keyframes fadeIn {
  from {
    opacity: 1;
  }
  to {
    opacity: 1;
  }
}

@keyframes focusBlur {
  from {
    opacity: 1;
  }
  to {
    opacity: 1;
  }
}

@keyframes color {
  0% {
    @apply bg-grey-lighter;
  }
  50% {
    @apply bg-grey-light;
  }
  100% {
    @apply bg-grey-lighter;
  }
}
img[lazy='loaded'] {
  // animation-duration: 1s;
  // animation-fill-mode: both;
  // animation-name: fadeIn;
}
img[lazy='loading'] {
  // filter: blur(4px);
  @apply bg-grey;
  animation-name: color;
  animation-duration: 2s;
  animation-iteration-count: infinite;
}
</style>
