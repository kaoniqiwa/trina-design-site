import 'docsearch.js/dist/cdn/docsearch.css'
import './index.less'
import { createApp, Transition, TransitionGroup, version as vueVersion } from 'vue'
import i18n from './i18n'
import NProgress from 'nprogress'
import Antd from 'ant-design-vue'
import router from './router'
import clipboard from './directives/clipboard'
import demoBox from './components/DemoBox.vue'
import demoContainer from './components/demoContainer.vue'
import demoSort from './components/demoSort.jsx'
import App from './App.vue'

const app = createApp(App)

router.beforeEach((to, from, next) => {
  if (to.path !== from.path) {
    NProgress.start()
  }
  next()
})

router.afterEach((to, from) => {
  if (to.path !== from.path) {
    NProgress.done()
    document.documentElement.scrollTop = 0
  }
})

app.use(Antd)
app.use(clipboard)
app.component('Transition', Transition)
app.component('TransitionGroup', TransitionGroup)
app.component('DemoBox', demoBox)
app.component('DemoContainer', demoContainer)
app.component('DemoSort', demoSort)
app.component('VNodes', function (_, { attrs: { value } }) {
  return value
})
app.use(i18n)
app.use(router)

app.mount('#app')
app.config.globalProperties.$i18n = i18n
