/** @format */
import { type App } from 'vue'
import { WButton, WWaterfall } from './components'
export { WButton, WWaterfall }
export default {
  install(app: App) {
    app.component(WButton.name, WButton)
    app.component(WWaterfall.name, WWaterfall)
  }
}
