import { educationGet } from '../services/backend';

export default {
  state: {
    data: [],
    loading: true,
    error: null
  },

  reducers: {
    fetching: (state, payload) => ({
      data: [],
      loading: true,
      error: null 
    }),
    succeed: (state, payload) => ({
      ...state,
      data: payload.data,
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
        const { data } = await educationGet(payload);
        console.log("12312312313")
        console.log(data)
        this.succeed(data);
      } catch(err) {
        this.failed(err);
      }
    }
  }
}