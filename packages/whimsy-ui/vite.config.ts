/** @format */
/// <reference types="vitest" />
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

import UnoCss from './config/unocss'

const rollupOptions = {
  external: ['vue'],
  output: {
    globals: {
      vue: 'Vue'
    }
  }
}
export default defineConfig({
  plugins: [vue(), vueJsx(), UnoCss()],
  build: {
    rollupOptions,
    minify: 'esbuild',
    sourcemap: true,
    cssCodeSplit: true,
    lib: {
      entry: './entry.ts',
      name: 'WhimsyUI',
      fileName: 'whimsy-ui',
      // 导出模块格式
      formats: ['es', 'umd', 'iife']
    }
  },
  resolve: {
    alias: {
      ui: process.cwd(),
      'ui-src': process.cwd() + '/src'
    }
  },
  test: {
    // enable jest-like global test APIs
    globals: true,
    // simulate DOM with happy-dom
    // (requires installing happy-dom as a peer dependency)
    environment: 'happy-dom',
    // 支持tsx组件，很关键
    transformMode: {
      web: [/.[tj]sx$/]
    }
  }
})
