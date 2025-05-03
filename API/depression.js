import axios from './axiosInstance';

export const getDepressionById = (depressionId) =>
  axios.get(`/depressions/${depressionId}`);