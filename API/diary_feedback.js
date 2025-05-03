import axios from './axiosInstance';

export const getFeedbackById = (diaryFeedbackId) =>
  axios.get(`/diary-feedbacks/${diaryFeedbackId}`);