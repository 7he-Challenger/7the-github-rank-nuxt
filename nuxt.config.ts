import { defineNuxtConfig } from 'nuxt'

const lifecycle = process.env.npm_lifecycle_event;

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  publicRuntimeConfig: {
    API_BASE_URL: process.env.API_BASE_URL
  },
  typescript: {
    shim: false
  },
  css: [
    'vuetify/lib/styles/main.sass',
    'mdi/css/materialdesignicons.min.css',
  ],
  build: {
    transpile: ['vuetify'],
  },
  buildModules: [
    "@pinia/nuxt",
    "@vueuse/nuxt",
  ],
  vite: {
    plugins: [
    ]
  },
  vueuse: {
    ssrHandlers: true,
  },
  components: true,
  ssr: false,
  target: 'static'
})
