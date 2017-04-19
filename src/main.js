import Vue from 'vue'
import App from './App'
import router from './router'
import VueI18n from 'vue-i18n'
import locales from "@/locales"
import uuid from "uuid";

Vue.config.productionTip = false

Vue.use(VueI18n)

Vue.config.lang = 'et';

Object.keys(locales).forEach(function (lang) {
  Vue.locale(lang, locales[lang])
})

router.afterEach((to, from) => {
  ga('send', {
    hitType: 'pageview',
    page: to.path
  })
});

if (!localStorage.getItem("userId")) {
  localStorage.setItem("userId", uuid.v4());
}
ga('set', 'userId', localStorage.getItem("userId"));

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
