import { createApp } from 'vue'
import App from '@/App.vue'
// 引入element-plus插件与样式
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
// 配置element-plus国际化
// @ts-ignore 忽略当前文件ts类型检测，否则有红色提示，打包会失败
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
// svg插件需要的配置代码
import 'virtual:svg-icons-register'
// 引入自定义插件对象：注册整个项目全局组件
import globalComponent from '@/components'
console.log(globalComponent)
// 引入模板的全局的样式
import '@/styles/index.scss'
// 引入路由
import router from './router'

// 获取应用实例对象
const app = createApp(App)
// 安装element-plus插件
app.use(ElementPlus, {
  locale: zhCn // element-plus国际化配置
})
// 安装自定义插件
app.use(globalComponent)
// 注册模板路由
app.use(router)
// 将应用挂载到挂载点上
app.mount('#app')
// 获取环境变量
console.log(import.meta.env)
