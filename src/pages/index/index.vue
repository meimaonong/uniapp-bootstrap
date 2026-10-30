<template>
  <view class="page" :class="{ 'theme-dark': theme === 'dark' }" />
</template>

<script>
import { useThemeStore } from '@/stores/theme'

// 空白首页：新项目的起点，主题接线保持可用
export default {
  computed: {
    theme() {
      return useThemeStore().theme
    },
  },
  onReady() {
    useThemeStore().apply()
  },
}
</script>

<style>
.page {
  min-height: 100vh;
  background-color: var(--td-bg-color-page, #f5f5f5);
}
</style>
