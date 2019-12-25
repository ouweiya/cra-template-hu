import axios from 'axios';
import { stringify } from 'query-string';

// 网络请求配置
// if (process.env.NODE_ENV === 'development') {
//   axios.defaults.baseURL = 'http://121.40.138.46:8080';
// } else {
//   axios.defaults.baseURL = 'https://www.yzbo.cn';
// }
axios.defaults.timeout = 6000;
axios.defaults.headers['Content-Type'] = 'application/x-www-form-urlencoded';
axios.defaults.transformRequest = [
  data => {
    if (Object.prototype.toString.call(data) === '[object Object]') {
      return stringify(data);
    } else {
      return data;
    }
  }
];

// 请求
axios.interceptors.request.use(
  config => {
    if (process.env.NODE_ENV === 'development') {
      // console.log('请求配置: ', config);
    }
    return config;
  },
  error => {
    if (process.env.NODE_ENV === 'development') {
      // console.log('请求错误: ', error);
    }
    return Promise.reject(error);
  }
);

// axios.defaults.headers.ticket = ''
