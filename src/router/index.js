import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home'
import Step1 from '@/components/step1'
import Step2 from '@/components/step2'
import Trial from '@/components/trial'
import Run from '@/components/run'
import Survey1 from '@/components/survey1'
import Survey2 from '@/components/survey2'
import End from '@/components/end'

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
      path: '/trial',
      name: 'trial',
      component: Trial
    },
    {
      path: '/survey1/:visited?',
      name: 'survey1',
      component: Survey1,
      props: true
    },
    {
      path: '/survey2',
      name: 'survey2',
      component: Survey2,
    },
    {
      path: '/run/:id',
      name: 'run',
      component: Run,
      props: true
    },
    {
      path: '/end',
      name: 'end',
      component: End
    }
  ]
})
