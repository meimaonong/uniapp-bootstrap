<script>
import { useThemeStore } from '@/stores/theme'

export default {
  onLaunch: function () {
    useThemeStore().init()
  },
  onShow: function () {
    console.log('App Show')
  },
  onHide: function () {
    console.log('App Hide')
  },
}
</script>

<style>
/*每个页面公共css */
/* #ifdef H5 */
body {
  background-color: var(--td-bg-color-page, #f5f5f5);
}
/* #endif */
</style>
