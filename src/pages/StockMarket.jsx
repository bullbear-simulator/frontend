import { useEffect, useState } from 'react';
import useAxiosInstance from "../hooks/useAxiosInstance";


function StockMarket() {
  const axios = useAxiosInstance();
  const [data, setData] = useState(null);

  const fetchData = async () => {
    try {
        const response = await axios.get('/stocks/000001');
        console.log("123", response.data);
    } catch (error) {
        console.error(error);
    }
  };
useEffect(() => {
  fetchData();
});

  return (
    <main>
      <div className="flex p-2 bg-secondary_bg-default">
        <p className="flex-1">종목</p>
        <p className="flex-1">현재가</p>
        <p className="flex-1">전일대비</p>
        <p className="flex-1">거래량</p>
      </div>
      <div className="flex p-2 bg-primary_bg-default">
        {/* 데이터 표시 */}
        <p className="flex-1">{data?.name}</p>
        <p className="flex-1">{data?.currentPrice}</p>
        <p className="flex-1">{data?.previousPrice}</p>
        <p className="flex-1">{data?.volume}</p>
      </div>
    </main>
  );
}

export default StockMarket;
