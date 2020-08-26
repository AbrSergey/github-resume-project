import axios from 'axios';
import config from '../config';

const backend = axios.create({ baseURL: `${config.backend.host}/api/resume` });
const gitHubBackend = axios.create({ baseURL: config.github.base_url });

export const socialLinksGet = () => backend.get('/social_links');
export const generalInformationGet = () => backend.get('/general_information');
export const skillsGet = () => backend.get('/skills');
export const educationGet = () => backend.get('/education');

export const getAccessToken = async (code) => {
  const { client_id, client_secret } = config.github;
  const { data } = await backend.post('/token', {
    code, client_id, client_secret
  });

  if (data.access_token) {
    localStorage.setItem('access_token', data.access_token);
    localStorage.setItem('isTokenPresented', true);
  }
}

export const userInfo = () => gitHubBackend.get('/user');

gitHubBackend.interceptors.request.use((config) => {
  const accessToken = localStorage.getItem('access_token');
  config.headers.Authorization = `Bearer ${accessToken}`;
  return config;
});