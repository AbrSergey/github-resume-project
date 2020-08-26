import { userInfo } from '../services/backend';

export default {
  state: {
    informationData: {},
    socialLinkData: [],
    name: null,
    company: null,
    position: null,
    avatar: null,
    loading: true,
    error: null
  },

  reducers: {
    fetching: (state, payload) => ({
      informationData: {},
      socialLinkData: [],
      name: null,
      company: null,
      position: null,
      avatar: null,
      loading: true,
      error: null
    }),
    succeed: (state, payload) => ({
      ...state,
      informationData: {
        company: payload.company,
        blog: payload.blog,
        location: payload.location,
        email: payload.email,
        bio: payload.bio
      },
      socialLinkData: [
        {
          href: payload.html_url,
          iconClass: 'fa-github'
        },
        {
          href: payload.twitter_username ? `https://twitter.com/${payload.twitter_username}` : null,
          iconClass: 'fa-twitter'
        }
      ],
      name: payload.name,
      company: payload.company,
      position: payload.company,
      avatar: payload.avatar_url,
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
        const { data } = await userInfo();
        this.succeed(data);
      } catch(err) {
        this.failed(err);
      }
    }
  }
}