// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: false },
  modules: ['@nuxtjs/tailwindcss'],
  devServer: {
    host: '0.0.0.0'
  },
  css: ['~/assets/css/tailwind.css'],
  runtimeConfig: {
    public: {
      notionApiKey: process.env.NOTION_API_KEY,
      notionDatabaseId: process.env.NOTION_DATABASE_ID
    }
  },
  app: {
    head: {
      htmlAttrs: {
        lang: 'ja'
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'format-detection', content: 'telephone=no' }
      ]
    }
  }
})