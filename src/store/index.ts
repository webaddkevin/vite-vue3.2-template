import { createStore, Store } from 'vuex';
import { BasicState } from './types';
import basic from './modules/basic';
import count from './modules/count';

export type State = {
  basic: BasicState;
};

const store: Store<State> = createStore({
  modules: {
    basic,
    count,
  },
});

export default store;
