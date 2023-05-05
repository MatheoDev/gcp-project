import { createStore } from 'vuex'

const store = createStore({
  state () {
    return {
      questions: [],
    }
  },
  actions: {
    fetchQuesttion ({ commit }) {
      // fetch data from API

      // this.$axios.get('/questions')

      commit('setQuestions', ['test'])
    }
  },
  mutations: {
    setQuestions (state, questions) {
      state.questions = questions
    },
    addQuestion (state, question) {
      state.questions.push(question)
    }
  }
})

export default store
