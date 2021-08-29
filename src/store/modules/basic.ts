import { BasicState } from '../types';

export default {
  namespaced: true,
  mutations: {
    SET_TOKEN(state: BasicState, data: string): void {
      console.log(data);
      state.token = data;
    },
  },
  state: (): BasicState => ({
    token: '',
  }),
};
