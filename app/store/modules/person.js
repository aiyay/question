const state = () => ({
  attribute: ['北京'],
});

const mutations = {
  setAttribute(state, text) {
    state.attribute.push(text);
  },
};

const actions = {
  setAttribute: ({ commit }, text) => {
    commit('setAttribute', text);
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
