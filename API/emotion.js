import axios from './axiosInstance';

export const getEmotionById = (emotionId) =>
  axios.get(`/emotions/${emotionId}`);