export const Slices = {
  methods: {
    sliceName(slice) {
      return `prismic${slice.slice_type.replace(/(^|_)./g, s =>
        s.slice(-1).toUpperCase()
      )}`
    },
    prismicLast(item, index, data) {
      if (index > 0) {
        let currentHexColor = 0
        const previousHexColor = data[index - 1].primary.background_color
        currentHexColor = data[index].primary.background_color
        if (previousHexColor === currentHexColor) {
          if (
            data[index].primary.heading[0] === undefined ||
            data[index].primary.heading.length == 0 ||
            data[index].primary.heading[0].text.length === 0
          ) {
            return 'heading-false samecolor pb-16'
          } else {
            return 'heading samecolor pb-16'
          }
        } else if (
          data[index].primary.heading[0] === undefined ||
          data[index].primary.heading.length == 0 ||
          data[index].primary.heading[0].text.length === 0
        ) {
          return 'notsamecolor heading-false py-16'
        } else {
          return 'notsamecolor heading pb-16'
        }
      } else {
        // if index is > 0
        if (index === 0) {
          if (
            data[0].primary.heading === undefined ||
            data[0].primary.heading.length == 0 ||
            data[0].primary.heading[0].text.length === 0
          ) {
            return 'firstItem heading-false py-16'
          }
          return 'firstItem heading py-16'
        }
      }
      return false
    },
    sliceClass(slice) {
      const sliceType = `${slice.slice_type.replace(/(^|_)./g, s =>
        s.slice(-1).toUpperCase()
      )}`
      return sliceType.charAt(0).toLowerCase() + sliceType.slice(1)
    }
  }
}
