import axios from './axiosInstance';

export const getDiaryById = (diaryId) =>
  axios.get(`/diaries/${diaryId}`);

export const getDiariesByMember = (memberId) =>
  axios.get(`/diaries?memberId=${memberId}`);