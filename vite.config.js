import { defineConfig } from 'vite'
import uni from '@dcloudio/vite-plugin-uni'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    uni(),
    {
      // uni 强制 preserveSymlinks: true，pnpm 下 pinia 的包内依赖（nostics）会解析失败
      name: 'pnpm-symlink-resolve',
      enforce: 'post',
      config: () => ({ resolve: { preserveSymlinks: false } }),
    },
  ],
})
