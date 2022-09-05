import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  ssr: false,
  target:"static",
  css: [
        'quasar/dist/quasar.prod.css',
        'vuetify/lib/styles/main.sass'
    ],
    build: {
      transpile: ['vuetify']
    },
    head: {
    script: [
      { src: 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js' },
      { src: '//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js' }
    ],
    link: [
      { rel: 'stylesheet',type:'text/css', href: '//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.css' }
    ]
  }
})
