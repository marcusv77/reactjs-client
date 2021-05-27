import axios from 'axios';

const api = axios.create({
  baseURL: 'https://fernandes-api-rest.herokuapp.com/'
});

export default api;