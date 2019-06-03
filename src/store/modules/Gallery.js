const state = {
  searchPhrase: null
}

const getters = {
  getSearchPhrase: ({searchPhrase}) => (searchPhrase)
}

const mutations = {
  setSearchPhrase: (state, phrase) => {
    state.searchPhrase = phrase
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations
}
