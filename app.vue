<script setup>
// 不需要导入
useSeoMeta({
  title: 'my bili',
  description: 'this is my bili',
  keywords: 'bili,vue,nuxt,ssr,seo'
})
</script>

<template>
  <div>
    <NuxtPage />
  </div>

</template>

<style lang="scss">
// 基础样式
@import './assets/styles/base.scss';
// 字体图标
@import './assets/styles/iconfont.scss';
</style>