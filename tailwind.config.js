/*
 ** TailwindCSS Configuration File
 **
 ** Docs: https://tailwindcss.com/docs/configuration
 ** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */
module.exports = {
  theme: {
    fontFamily: {
      display: ['"Noto Sans KR"', 'serif']
    },
    extend: {
      colors: {
        primary: '#22a266',
        secondary: '#d3e5dc',
        'gray-100': '#f9fafb'
      }
    }
  },
  variants: {
    margin: ['responsive', 'last']
  },
  plugins: [],
  // purge: false,
  purge: {
    enabled: process.env.NODE_ENV === 'production',
    // mode: postcss,
    content: [
      './slices/**/*.vue',
      './node_modules/swiper/**/*.js',
      './node_modules/vue-awesome-swiper/**/*.js',
      './node_modules/vue-awesome-swiper/**/*.ts',
      './components/**/**.vue',
      'layouts/**/*.vue',
      'pages/**/*.vue',
      'plugins/**/*.js',
      'nuxt.config.js',
      './node_modules/swiper/js/swiper.esm.js'
    ],
    options: {
      whitelistPatterns: [/^swiper/],
      whitelistPatternsChildren: [/^swiper/]
    }
    // whitelist: ['swiper-pagination-bullet', 'bg-red-500']
  }
  // purge: ['./slices/**/*.vue']
}
