import { defineConfig } from 'wxt';

// See https://wxt.dev/api/config.html
export default defineConfig({
  extensionApi: 'chrome',
  modules: ['@wxt-dev/module-react', 'antd', 'sass-embedded',
    "@ant-design/colors", "@ant-design/icons", "react-qr-code"]
});
