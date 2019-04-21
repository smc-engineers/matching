import axios from 'axios';

// export const URL = process.env.REACT_APP_API_URL === undefined? 'http://127.0.0.1:8080/api' : process.env.REACT_APP_API_URL
export const URL = 'https://paas:d8f0fbbd95c60db5acca3ffbdef89e0a@thorin-us-east-1.searchly.com'

export const myHttpClient = axios.create({
  headers:{
    'Access-Control-Allow-Origin': '*',
  }
})
myHttpClient.interceptors.request.use (
   (config) => {
      config.headers.accountId = sessionStorage.getItem('user') ? JSON.parse(sessionStorage.getItem('user')).accountId : null
      return config;
  }
)
