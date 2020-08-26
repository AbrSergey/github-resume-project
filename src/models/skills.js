import { skillsGet } from '../services/backend';

export default {
  state: {
    skills: [],
    text: null,
    loading: true,
    error: null
  },

  reducers: {
    fetching: (state, payload) => ({
      skills: [],
      text: null,
      loading: true,
      error: null 
    }),
    succeed: (state, payload) => ({
      ...state,
      skills: payload.skills,
      text: payload.text,
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
        const { data } = await skillsGet(payload);
        this.succeed(data);
      } catch(err) {
        this.failed(err);
      }
    }
  }
}