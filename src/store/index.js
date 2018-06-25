import Vue from 'vue'
import Vuex from 'vuex'
import * as firebase from 'firebase'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    loadedAudits: [],
    loadedCompAudits: [],
    user: null,
    loading: false,
    error: null
  },
  mutations: {
    createAudit (state, payload) {
      state.loadedAudits.push(payload)
    },
    createAnsweredAudit (state, payload) {
      state.loadedCompAudits.push(payload)
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
    },
    setLoadedAudits (state, payload) {
      state.loadedAudits = payload
    },
    setLoadedCompAudits (state, payload) {
      state.loadedCompAudits = payload
    },
    updateAudit (state, payload) {
      const audit = state.loadedAudits.find(audit => {
        return audit.id === payload.id
      })
      if (payload.title) {
        audit.title = payload.title
      }
      if (payload.subtitle) {
        audit.subtitle = payload.subtitle
      }
      if (payload.questions) {
        audit.questions = payload.questions
      }
    }
  },
  actions: {
    loadAudits ({commit}) {
      firebase.database().ref('audits').once('value')
        .then((data) => {
          const audits = []
          const obj = data.val()
          for (let key in obj) {
            audits.push({
              id: key,
              title: obj[key].title,
              subtitle: obj[key].subtitle,
              questions: obj[key].questions
            })
          }
          commit('setLoadedAudits', audits)
        })
        .catch(
          (error) => {
            console.log(error)
          })
    },
    loadCompAudits ({commit}) {
      firebase.database().ref('answeredAudits').once('value')
        .then((data) => {
          const compAudits = []
          const obj = data.val()
          for (let key in obj) {
            compAudits.push({
              id: key,
              title: obj[key].title,
              subtitle: obj[key].subtitle,
              taker: obj[key].taker,
              questions: obj[key].questions
            })
          }
          commit('setLoadedCompAudits', compAudits)
        })
        .catch(
          (error) => {
            console.log(error)
          })
    },
    createAudit ({commit}, payload) {
      const audit = {
        title: payload.title,
        subtitle: payload.subtitle,
        questions: payload.questions
      }
      firebase.database().ref('audits').push(audit)
        .then((data) => {
          const key = data.key
          console.log(data)
          commit('createAudit', {
            ...audit,
            id: key
          })
        })
        .catch((error) => {
          console.log(error)
        })
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
    updateAuditData ({commit}, payload) {
      commit('setLoading', true)
      const updateObj = {}
      if (payload.title) {
        updateObj.title = payload.title
      }
      if (payload.subtitle) {
        updateObj.subtitle = payload.subtitle
      }
      if (payload.questions) {
        updateObj.questions = payload.questions
      }
      firebase.database().ref('audits').child(payload.id).update(updateObj)
        .then(() => {
          commit('setLoading', false)
          commit('updateAudit', payload)
        })
        .catch(error => {
          console.log(error)
          commit('setLoading', false)
        })
    },
    deleteAudit ({commit}, payload) {
      firebase.database().ref('audits').child(payload.id).remove()
    },
    autoSignIn ({commit}, payload) {
      commit('setUser', {id: payload.uid})
    },
    logout ({commit}) {
      firebase.auth().signOut()
      commit('setUser', null)
    },
    clearError ({commit}) {
      commit('clearError')
    },
    createAnsweredAudit ({commit}, payload) {
      const answeredAudit = {
        title: payload.auditTitle,
        subtitle: payload.auditSubtitle,
        questions: payload.answeredQuestions,
        taker: payload.auditTaker
      }
      firebase.database().ref('answeredAudits').push(answeredAudit)
        .then((data) => {
          const key = data.key
          console.log(data)
          commit('createAnsweredAudit', {
            ...answeredAudit,
            id: key
          })
        })
        .catch((error) => {
          console.log(error)
        })
    }
  },
  getters: {
    loadedAudits (state) {
      return state.loadedAudits.sort((auditA, auditB) => {
        return auditA.date > auditB.date
      })
    },
    loadedCompAudits (state) {
      return state.loadedCompAudits.sort((auditA, auditB) => {
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
    loadedCompAudit (state) {
      return (auditId) => {
        return state.loadedCompAudits.find((audit) => {
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
