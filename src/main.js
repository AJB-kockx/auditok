// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import {store} from './store'
import * as firebase from 'firebase'
import AlertCmp from './components/Alert.vue'
import EditAuditDetailsDialog from './components/doAudit/edit/EditAuditDetailsDialog'
import QuestionDialog from './components/DoAudit/QuestionDialog'
import ScaleComponent from './components/DoAudit/ScaleComponent'
import JsonExcel from 'vue-json-excel'
import {
  Vuetify,
  VApp,
  VNavigationDrawer,
  VFooter,
  VList,
  VBtn,
  VIcon,
  VGrid,
  VToolbar,
  VForm,
  VTextField,
  transitions,
  VCard,
  VAlert,
  VDataTable,
  VDialog,
  VSelect,
  VRadioGroup
} from 'vuetify'
import '../node_modules/vuetify/src/stylus/app.styl'

Vue.use(Vuetify, {
  components: {
    VApp,
    VNavigationDrawer,
    VFooter,
    VList,
    VBtn,
    VIcon,
    VGrid,
    VToolbar,
    VForm,
    transitions,
    VTextField,
    VCard,
    VAlert,
    VDataTable,
    VDialog,
    VSelect,
    VRadioGroup
  }
})

Vue.component('app-alert', AlertCmp)
Vue.component('app-edit-audit-details-dialog', EditAuditDetailsDialog)
Vue.component('question-dialog', QuestionDialog)
Vue.component('scale-component', ScaleComponent)
Vue.component('downloadExcel', JsonExcel)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
  created () {
    firebase.initializeApp({
      apiKey: 'AIzaSyAt_mzUHz4-spIHMfcK9e92qVxdHlPtY_E',
      authDomain: 'audit-8df60.firebaseapp.com',
      databaseURL: 'https://audit-8df60.firebaseio.com',
      projectId: 'audit-8df60',
      storageBucket: 'audit-8df60.appspot.com'
    })
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.$store.dispatch('autoSignIn', user)
      }
    })
    this.$store.dispatch('loadAudits')
  }
})
