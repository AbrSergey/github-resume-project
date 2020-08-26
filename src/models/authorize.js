import { getAccessToken } from '../services/backend';

export default {
  state: {
    loading: true,
    error: null
  },

  reducers: {
    fetching: (state, payload) => ({
      loading: true,
      error: null 
    }),
    succeed: (state, payload) => ({
      ...state,
      loading: false
    }), 
    failed: (state, error) => ({
      ...state,
      loading: false,
      error: JSON.stringify(error)
    }) 
  },

  effects: {
    async get(payload, rootState) {
      try {
        this.fetching();
        await getAccessToken(payload);
        this.succeed();
      } catch(err) {
        this.failed(err);
      }
    }
  }
}