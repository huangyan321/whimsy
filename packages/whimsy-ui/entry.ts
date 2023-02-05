/** @format */
import { type App } from 'vue'
import { WButton } from './components'
export { WButton }
export default {
  install(app: App) {
    app.component(WButton.name, WButton)
  }
}
