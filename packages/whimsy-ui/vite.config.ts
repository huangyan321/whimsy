/** @format */
/// <reference types="vitest" />
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

import UnoCss from './config/uno.config'

import dts from 'vite-plugin-dts'

const rollupOptions = {
  external: ['vue'],
  output: {
    globals: {
      vue: 'Vue'
    }
  }
}
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    UnoCss(),
    dts({
      outputDir: './dist/types',
      insertTypesEntry: false, // 插入TS 入口
      copyDtsFiles: true // 是否将源码里的 .d.ts 文件复制到 outputDir
    })
  ],
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
      root: process.cwd(),
      '@': process.cwd() + '/src'
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
    },
    coverage: {
      provider: 'c8', // or 'c8',
      reporter: ['text', 'json', 'html']
    }
  }
})
