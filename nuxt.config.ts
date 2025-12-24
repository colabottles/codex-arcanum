// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: [
    '~/assets/css/base.css',
    '~/assets/css/layout.css',
    '~/assets/css/components.css'
  ],
  nitro: {
    preset: 'netlify'
  }
})