const state = {
  currentPage: {}
};

const mutations = {
  setCurrentPage(state, page) {
    state.currentPage = page;
  }
};

const actions = {};

const getters = {};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
};
