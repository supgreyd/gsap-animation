// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  build: {
    transpile: ['gsap']
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: [
    '@nuxtjs/google-fonts'
  ],
  googleFonts: {
    families: {
      Montserrat: true,
    }
  },
  plugins: [
    '~/plugins/gsap.js'
  ],
  app: {
    baseURL: '/',
  }
})