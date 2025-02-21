import { useEffect } from 'react';
import useAxiosInstance from '../hooks/useAxiosInstance';

function Home() {
  useEffect(() => {
    // 데이터 가져오기
    const fetchData = async () => {
      try {
        const response = await useAxiosInstance.get('/stocks');
        console.log('데이터:', response.data);
      } catch (error) {
        console.error('데이터 가져오기 오류:', error);
      }
    };

    fetchData();
  }, []); // 빈 배열을 주면 컴포넌트가 처음 마운트될 때만 실행됨

  return (
    <h1>Home</h1>
  );
}

export default Home;
