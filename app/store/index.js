import Vue from 'vue';
import Vuex from 'vuex';
import person from './modules/person';

Vue.use(Vuex);

const store = () =>
  new Vuex.Store({
    modules: {
      person,
    },
    action: {},
  });

export default store;
