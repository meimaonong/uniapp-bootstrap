import { defineStore } from 'pinia'

const STORAGE_KEY = 'app-theme-mode'
const NAV_COLORS = {
  light: { frontColor: '#000000', backgroundColor: '#f8f8f8' },
  dark: { frontColor: '#ffffff', backgroundColor: '#181818' },
}

function getSystemTheme() {
  // #ifdef H5
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  // #endif
  // #ifndef H5
  return uni.getSystemInfoSync().theme === 'dark' ? 'dark' : 'light'
  // #endif
}

function applyTheme(theme) {
  // #ifdef H5
  document.documentElement.classList.toggle('theme-dark', theme === 'dark')
  // #endif
  uni.setNavigationBarColor(NAV_COLORS[theme])
  // #ifdef MP-WEIXIN
  uni.setBackgroundColor({
    backgroundColor: NAV_COLORS[theme].backgroundColor,
    backgroundColorTop: NAV_COLORS[theme].backgroundColor,
    backgroundColorBottom: NAV_COLORS[theme].backgroundColor,
  })
  // #endif
}

export const useThemeStore = defineStore('theme', {
  state: () => {
    const saved = uni.getStorageSync(STORAGE_KEY)
    return {
      // system: 跟随系统；light / dark：手动覆盖并持久化
      mode: ['system', 'light', 'dark'].includes(saved) ? saved : 'system',
      systemTheme: getSystemTheme(),
    }
  },
  getters: {
    theme: (state) => (state.mode === 'system' ? state.systemTheme : state.mode),
  },
  actions: {
    init() {
      // #ifdef H5
      window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
        this.setSystemTheme(e.matches ? 'dark' : 'light')
      })
      // #endif
      // #ifndef H5
      uni.onThemeChange?.(({ theme }) => this.setSystemTheme(theme))
      // #endif
    },
    setMode(mode) {
      this.mode = mode
      uni.setStorageSync(STORAGE_KEY, mode)
      applyTheme(this.theme)
    },
    setSystemTheme(theme) {
      this.systemTheme = theme
      if (this.mode === 'system') applyTheme(theme)
    },
    // 导航栏颜色是页面级的，页面 onReady 时补一次，避免被框架内设置覆盖
    apply() {
      applyTheme(this.theme)
    },
  },
})
