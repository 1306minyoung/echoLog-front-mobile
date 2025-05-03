
import axios from 'axios';

export default function getDiaries() {
    return axios.get('http://192.168.1.12:8080/api/diaries?memberId=1')
      .then(response => response.data)
      .catch(error => {
        console.error('API 호출 에러:', error);
        throw error; // 에러 다시 던지기
      });
  }