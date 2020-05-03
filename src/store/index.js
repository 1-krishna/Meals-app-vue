import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    mealCard: {},
    searchQuery: null,
    detailedMeal: null,
    searchResult: [],
    clickedOnMeal: false
  },
  mutations: {
    changeMealCard: (state, meal) => {
      state.mealCard = meal
    },
    changeSearchQuery: (state, query) => {
      state.searchQuery = query
    },
    changeDetailedMeal: (state, meal) => {
      state.detailedMeal = meal
    },
    changeSearchResult: (state, result) => {
      state.searchResult = result
    },
    changeClickedOnMeal: (state, value) => {
      state.clickedOnMeal = value
    }
  },
  getters: {
    mealCard: state => (state.mealCard),
    searchQuery: state => (state.searchQuery),
    detailedMeal: state => (state.detailedMeal),
    searchResult: state => (state.searchResult),
    clickedOnMeal: state => (state.clickedOnMeal)
  },
  actions: {
  },
  modules: {
  }
})
