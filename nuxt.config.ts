// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // 开区ssr
  ssr: true,
  compatibilityDate: '2024-11-01',
  // 开启调试工具
  devtools: { enabled: true },
  // 模块使用
  modules: ['@vant/nuxt']
})
