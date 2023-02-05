/** @format */
import sidebar from './layout/sidebar'
import nav from './layout/nav'
const config = {
  themeConfig: {
    siteTitle: 'Whimsy',
    sidebar,
    nav
  },
  markdown: {
    config: (md) => {
      // 添加DemoBlock插槽
      const { demoBlockPlugin } = require('vitepress-theme-demoblock')
      md.use(demoBlockPlugin)
    }
  }
}
export default config
