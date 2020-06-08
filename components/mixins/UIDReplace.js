export default {
  methods: {
    url(menuLink) {
      if (!menuLink.type) {
        return ''
      }
      /* if (menuLink.type == 'holiday-courses_summer-courses') {
        debugger
      } */
      const menuLinkType = menuLink.type.replace('_', '/')
      const menuLinkUid = menuLink.uid.replace('_', '/')

      if (menuLink.type === 'home') {
        return '/'
      } else if (menuLink.link_type === 'Web') {
        return `/${menuLink.lang.substr(0, 2)}/${menuLink.url}`
      } else if (menuLink.type === 'page') {
        return `/${menuLink.lang.substr(0, 2)}/${menuLink.uid}/`
      } else if (menuLink.type.replace('_', '-') === menuLink.uid) {
        return `/${menuLink.lang.substr(0, 2)}/${menuLink.uid}/`
      } else if (menuLinkType === menuLinkUid) {
        // when index page
        return `/${menuLink.lang.substr(0, 2)}/${menuLinkType}/`
      }
      return `/${menuLink.lang.substr(0, 2)}/${menuLink.type.replace(
        '_',
        '/'
      )}/${menuLink.uid}/`
    },
    htmlHelper(content) {
      content.forEach(item => {
        item.spans.forEach(span => {
          if (
            span.type === 'hyperlink' &&
            span.data &&
            span.data.link_type === 'Document'
          ) {
            const url = this.url(span.data)
            span.data.link_type = 'Web'
            span.data.url = url
          }
        })
      })
      return this.$prismic.asHtml(content)
    }
  }
}
