import WButton from './src/button.vue'
import { App } from 'vue'
// 导出Button组件
export { WButton }

// 导出Vue插件
export default {
  install(app: App) {
    app.component(WButton.name, WButton)
  }
}
