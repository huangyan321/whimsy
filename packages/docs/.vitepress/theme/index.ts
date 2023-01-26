/** @format */

import Theme from 'vitepress/dist/client/theme-default/index';
import WhimsyUI from 'whimsy-ui';
import 'whimsy-ui/dist/style.css'
// 主题样式
import 'vitepress-theme-demoblock/dist/theme/index.mjs';
// 插件的组件，主要是demo组件
import Demo from 'vitepress-theme-demoblock/dist/client/components/Demo.vue';
import DemoBlock from 'vitepress-theme-demoblock/dist/client/components/DemoBlock.vue';
export default {
  ...Theme,
  enhanceApp({ app }) {
    app.use(WhimsyUI);
    app.component(Demo.name, Demo);
    app.component(DemoBlock.name, DemoBlock);
  },
};
