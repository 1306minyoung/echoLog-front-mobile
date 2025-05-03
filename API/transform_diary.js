import axios from './axiosInstance';

export const getTransformDiaryById = (transformDiaryId) =>
  axios.get(`/depressions/${transformDiaryId}`);