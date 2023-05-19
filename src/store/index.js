import { createStore } from 'vuex'
import data from './data.json'

const store = createStore({
  state () {
    return {
      input: {
        firstname: '',
        lastname: '',
      },
      form: {},
      result: {},
      step: 0,
      loading: false,
      message: []
    }
  },
  actions: {
    initMock({ commit }) {
      // mock data
      commit('setForm', data)
    },
    fetchQuestion({ state, commit }) {
      if (state.message.length) {
        state.message = []
      }

      if (state.input.firstname === '' || state.input.lastname === '') {
        state.message.push('Veuillez renseigner votre prénom et votre nom')
        return
      }

      state.loading = true
      // fetch data from API
      this.$axios.post('/forms', state.input)
        .then(response => {
          // todo à verifier
          commit('setForm', response.data)
        })
        .catch(error => {
          console.error(error)
        })
        .finally(() => {
          // todo faire un loading
          state.step = 1
          state.loading = false
        })
    },
    postQuestions({ state, commit }) {
      if (state.message.length) {
        state.message = []
      }

      if (state.form.inputs.some(input => input.valueUser === null)) {
        state.message.push('Veuillez répondre à toutes les questions')
        return
      }

      state.loading = true
      // post data to API
      this.$axios.post('/result', state.form)
        .then(response => {
          // todo à verifier
          commit('setResult', response.data)
        })
        .catch(error => {
          console.error(error)
        })
        .finally(() => {
          state.step = 2
          state.loading = false
        })
    }
  },
  mutations: {
    setForm (state, form) {
      state.form = form
    },
    setResult (state, result) {
      state.result = result
    },
    setStep(state, step) {
      state.step = step
    },
    clearAll(state) {
      state.input = {
        firstname: '',
        lastname: '',
      }
      state.form = {}
      state.result = {}
      state.step = 0
      state.loading = false
      state.message = []
    }
  }
})

export default store
