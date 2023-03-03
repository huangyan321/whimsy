/** @format */

import { defineConfig } from 'vite';
// https://vitejs.dev/config/

export default defineConfig({
  build: {},
  plugins: [
    // 添加JSX插件
  ],
  server: {
    port: 8000
  },
  ssr: { noExternal: ['vitepress-theme-demoblock'] },
  css: {
    /* CSS 预处理器 */
    preprocessorOptions: {
      scss: {}
    }
  }
});
