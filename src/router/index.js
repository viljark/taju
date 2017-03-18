import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home'
import Step1 from '@/components/step1'
import Step2 from '@/components/step2'
import Step3 from '@/components/step3'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/step1',
      name: 'step1',
      component: Step1
    },
    {
      path: '/step2',
      name: 'step2',
      component: Step2
    },
    {
      path: '/step3',
      name: 'step3',
      component: Step3
    }
  ]
})
