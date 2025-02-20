import axios from 'axios';

// axios 인스턴스 생성
const axiosInstance = axios.create({
  baseURL: 'http://localhost:8080', // 기본 URL 설정
  headers: {
    'Content-Type': 'application/json',
  },
});

export default axiosInstance;
