export default {
  mode: 'universal',

  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      {
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon.ico'
      }
    ],
    script: [
      // {
      //   src:
      //     'https://cdn.polyfill.io/v2/polyfill.min.js?features=Element.prototype.classList'
      // },
      // {
      //   src:
      //     'https://cdn.jsdelivr.net/npm/focus-visible@5.0.2/dist/focus-visible.min.js'
      // }
    ]
  },

  /*
   ** Customize the progress-bar color
   */
  loading: {
    color: '#fff'
  },

  /*
   ** Global CSS
   */
  css: ['~assets/scss/default.scss', 'swiper/css/swiper.css'],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    // '@nuxtjs/eslint-module', // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    '@nuxtjs/tailwindcss'
  ],
  purgeCSS: {
    enabled: false
  },
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios', // Doc: https://github.com/nuxt-community/dotenv-module
    '@nuxtjs/dotenv',
    [
      '@nuxtjs/prismic',
      {
        endpoint: 'https://vue119.cdn.prismic.io/api/v2',
        apiOptions: {
          routes: [
            {
              type: 'page',
              path: '/:lang/:uid'
            }
          ]
        }
      }
    ],
    ['nuxt-sm'],
    [
      'nuxt-webfontloader',
      {
        google: {
          families: ['Noto Sans KR']
        }
      }
    ],
    [
      'nuxt-lazy-load',
      {
        // Your options
      }
    ]
  ],

  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},

  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {},

    transpile: ['vue-slicezone', 'nuxt-sm']
  },
  tailwindcss: {
    exposeConfig: true
  }
}
