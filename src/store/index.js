import Vue from 'vue'
import Vuex from 'vuex'
import * as firebase from 'firebase'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    loadedAudits: [
      {id: '1', title: 'Audit1', subTitle: 'Een audit 1', date: '1-1-2018'},
      {id: '2', title: 'Audit2', subTitle: 'Een audit 2', date: '1-2-2018'}
    ],
    user: null,
    loading: false,
    error: null
  },
  mutations: {
    createAudit (state, payload) {
      state.loadedAudits.push(payload)
    },
    setUser (state, payload) {
      state.user = payload
    },
    setLoading (state, payload) {
      state.loading = payload
    },
    setError (state, payload) {
      state.error = payload
    },
    clearError (state) {
      state.error = null
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
    },
    signUserIn ({commit}, payload) {
      commit('setLoading', true)
      commit('clearError')
      firebase.auth().signInWithEmailAndPassword(payload.email, payload.password)
        .then(
          user => {
            commit('setLoading', false)
            const newUser = {
              id: user.uid
            }
            commit('setUser', newUser)
          }
        )
        .catch(
          error => {
            commit('setLoading', false)
            commit('setError', error)
            console.log(error)
          }
        )
    },
    clearError ({commit}) {
      commit('clearError')
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
    },
    user (state) {
      return state.user
    },
    error (state) {
      return state.error
    },
    loading (state) {
      return state.loading
    }
  }
})
