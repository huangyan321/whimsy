import WWaterfall from './src/waterfall'
import { App } from 'vue'
// 导出Button组件
export { WWaterfall }

// 导出Vue插件
export default {
  install(app: App) {
    app.component(WWaterfall.name, WWaterfall)
  }
}
