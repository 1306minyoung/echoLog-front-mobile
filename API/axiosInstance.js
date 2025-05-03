// api/axiosInstance.js
import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://192.168.1.12:8080/api', // 공통 주소만 입력함
  timeout: 5000,
});

export default axiosInstance;