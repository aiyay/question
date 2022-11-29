// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss'
  ],
  css: [
    // 项目中的 CSS 文件
    '@/assets/css/_color.css',
  ],
  postcss: {
    plugins: {
      tailwindcss: {},
    },
  },
})
