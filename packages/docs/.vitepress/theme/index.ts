/** @format */
import DefaultTheme from 'vitepress/theme'
import 'vitepress-theme-demoblock/dist/theme/styles/index.css'

import WhimsyUI from 'whimsy-ui'
import 'whimsy-ui/dist/entry.css'
// 插件的组件，主要是demo组件
import Demo from 'vitepress-theme-demoblock/dist/client/components/Demo.vue'
import DemoBlock from 'vitepress-theme-demoblock/dist/client/components/DemoBlock.vue'
export default {
  ...DefaultTheme,
  enhanceApp(ctx) {
    DefaultTheme.enhanceApp(ctx)
    ctx.app.use(WhimsyUI)
    ctx.app.component(Demo.name, Demo)
    ctx.app.component(DemoBlock.name, DemoBlock)
  }
}
