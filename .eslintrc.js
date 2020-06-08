module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    '@nuxtjs',
    'plugin:nuxt/recommended',
    'plugin:prettier/recommended',
    'prettier',
    'prettier/vue'
  ],
  plugins: ['prettier'],
  // add your custom rules here
  rules: {
    'vue/no-v-html': 0,
    'no-console': 0,
    'vue/require-component-is': 0,
    'vue/require-component-is': 0,
    'vue/valid-template-root': 0,
    'vue/valid-template-root': 0
  }
}
