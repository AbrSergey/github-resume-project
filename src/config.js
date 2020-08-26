export default {
  backend: {
    host: 'https://hh-test-backend.herokuapp.com', //process.env.BACKEND_HOST
  },
  github: {
    auth_url: 'https://github.com/login/oauth/authorize', //process.env.GITHUB_AUTH_URL,
    client_id: process.env.REACT_APP_GITHUB_CLIENT_ID,
    client_secret: process.env.REACT_APP_GITHUB_CLIENT_SECRET,
    redirect_url: process.env.REACT_APP_GITHUB_REDIRECT_URL, //'http://localhost:3000/token',
    base_url: 'https://api.github.com' //process.env.GITHUB_BASE_URL
  }
};