import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Createaudit from '@/components/CreateAudit/Createaudit'
import Doaudit from '@/components/DoAudit/Doaudit'
import Audit from '@/components/DoAudit/Audit'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/CreateAudit',
      name: 'Createaudit',
      component: Createaudit
    },
    {
      path: '/DoAudit',
      name: 'Doaudit',
      component: Doaudit
    },
    {
      path: '/DoAudit/:id',
      name: 'Audit',
      props: true,
      component: Audit
    }
  ]
})
