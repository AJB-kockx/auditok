import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Createaudit from '@/components/CreateAudit/Createaudit'
import Doaudit from '@/components/DoAudit/Doaudit'
import AnsweredAuditList from '@/components/CompAudits/AnsweredAuditList'
import Audit from '@/components/DoAudit/Audit'
import AnsweredAudit from '@/components/CompAudits/AnsweredAudit'
import SignIn from '@/components/SignIn'
import AuthGuard from './auth-guard'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      beforeEnter: AuthGuard
    },
    {
      path: '/CreateAudit',
      name: 'Createaudit',
      component: Createaudit,
      beforeEnter: AuthGuard
    },
    {
      path: '/DoAudit',
      name: 'Doaudit',
      component: Doaudit,
      beforeEnter: AuthGuard
    },
    {
      path: '/DoAudit/:id',
      name: 'Audit',
      props: true,
      component: Audit,
      beforeEnter: AuthGuard
    },
    {
      path: '/SignIn',
      name: 'SignIn',
      component: SignIn
    },
    {
      path: '/CompAudits',
      name: 'AnsweredAuditList',
      component: AnsweredAuditList
    },
    {
      path: '/AnsweredAudit/:id',
      name: 'AnsweredAudit',
      props: true,
      component: AnsweredAudit,
      beforeEnter: AuthGuard
    }
  ]
})
