/** @format */

import { defineConfig } from 'vite'
// https://vitejs.dev/config/

export default defineConfig({
  build: {},
  plugins: [
    // 添加JSX插件
  ],
  ssr: { noExternal: ['vitepress-theme-demoblock'] }
})
