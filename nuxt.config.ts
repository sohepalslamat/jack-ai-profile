// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: false },
  components: {
    global: true,
    dirs: ['components'],
  },
  app: {
    head: {
      link: [
        {
          rel: 'stylesheet',
          href: 'https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/css/all.min.css'
        }
      ]
    },
    baseURL: process.env.NODE_ENV === 'production' ? '/jack-ai-profile/' : '/',
  },
  ssr: false,
})
