import { CountState } from '../types';
import { Commit } from 'vuex';

export default {
  namespaced: true,
  mutations: {
    SET_NUM(state: CountState, data: number) {
      console.log(data);
      state.num = data;
    },
  },
  actions: {
    add({ commit, state }: { commit: Commit; state: CountState }, data): void {
      const num = state.num + 1;
      commit('SET_NUM', num);
    },
    minus(
      { commit, state }: { commit: Commit; state: CountState },
      data
    ): void {
      const num = state.num - 1;
      commit('SET_NUM', num);
    },
  },
  state: (): CountState => ({
    num: 0,
  }),
};
