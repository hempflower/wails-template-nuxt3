// https://nuxt.com/docs/api/configuration/nuxt-config

const isDev = process.env.NODE_ENV === "development"

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss'],
  ssr: false,
  // IMPORTANT: when run wails dev, nitro delete the .output folder, it cause generate binding error
  // https://github.com/nuxt/nuxt/issues/29841
  nitro: {
    output: {
      dir: isDev ? ".output-dev" : ".output",
      serverDir: isDev
        ? ".output-dev/server"
        : ".output/server",
      publicDir: isDev
        ? ".output-dev/public"
        : ".output/public"
    }
  },
  imports: {
    dirs: [
      'wailsjs/runtime'
    ]
  }
})
