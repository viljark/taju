import Vue from 'vue'
import App from './App'
import router from './router'
import VueI18n from 'vue-i18n'
import locales from "@/locales"

Vue.config.productionTip = false

Vue.use(VueI18n)

Vue.config.lang = 'et';

Object.keys(locales).forEach(function (lang) {
  Vue.locale(lang, locales[lang])
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
