export default {
  backend: {
    host: process.env.BACKEND_HOST // 'https://hh-test-backend.herokuapp.com'
  },
  github: {
    auth_url: process.env.GITHUB_AUTH_URL, //'https://github.com/login/oauth/authorize',
    client_id: process.env.GITHUB_CLIENT_ID,
    client_secret: process.env.GITHUB_CLIENT_SECRET,
    redirect_url: process.env.GITHUB_REDIRECT_URL, //'http://localhost:3000/token',
    base_url: process.env.GITHUB_BASE_URL //'https://api.github.com'
  }
};