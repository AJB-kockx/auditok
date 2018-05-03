import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    loadedAudits: [
      {id: '1', title: 'Audit1', subTitle: 'Een audit 1', date: '1-1-2018'},
      {id: '2', title: 'Audit2', subTitle: 'Een audit 2', date: '1-2-2018'}
    ]
  },
  mutations: {
    createAudit (state, payload) {
      state.loadedAudits.push(payload)
    }
  },
  actions: {
    createAudit ({commit}, payload) {
      const audit = {
        title: payload.title,
        subtitle: payload.subtitle,
        id: '3'
      }
      // firebase
      commit('createAudit', audit)
    }
  },
  getters: {
    loadedAudits (state) {
      return state.loadedAudits.sort((auditA, auditB) => {
        return auditA.date > auditB.date
      })
    },
    loadedAudit (state) {
      return (auditId) => {
        return state.loadedAudits.find((audit) => {
          return audit.id === auditId
        })
      }
    }
  }
})
