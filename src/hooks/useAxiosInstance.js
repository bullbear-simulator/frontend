import { useMemo } from 'react';
import axios from 'axios';

// axios 인스턴스 생성
const useAxiosInstance = () => {
  const axiosInstance = useMemo(() => {
    return axios.create({
      baseURL: 'http://localhost:8080', // 기본 URL 설정
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }, []);

  return axiosInstance;
};

export default useAxiosInstance;
