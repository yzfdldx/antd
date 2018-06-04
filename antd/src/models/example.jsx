import {aaa} from '../services/example.jsx';

export default {

  namespace: 'example',

  state: {
    user: {
      id: 123,
    },
    aaa: '',
  },

  subscriptions: {
    setup({ dispatch, history }) {  // eslint-disable-line
    },
  },

  effects: {
    *fetch({ payload }, { call, put }) {  // eslint-disable-line
      yield put({ type: 'save' });
    },
    *aaa({ payload }, { call, put }) {  // eslint-disable-line
      console.log(payload);
      yield put({ type: 'save' });
    },
  },

  reducers: {
    save(state, action) {
      return { ...state, ...action.payload };
    },
  },

};
