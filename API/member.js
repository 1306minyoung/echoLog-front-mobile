import axios from './axiosInstance'; 

// 1. 모든 회원 목록 조회
export const getAllMembers = () => axios.get('/members');

// 2. 특정 회원 상세 조회
export const getMemberById = (memberId) => axios.get(`/members/${memberId}`);