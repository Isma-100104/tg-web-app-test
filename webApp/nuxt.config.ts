// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  css: [
    "@/assets/styles/index.css"
  ],
  app: {
    head: {
      script: [
        { 
          src: 'https://telegram.org/js/telegram-web-app.js',
          async: true,
          defer: true
        }
      ]
    }
  },
})
