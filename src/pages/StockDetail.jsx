import Order from "@components/stockdetail/order/Order";
import Chart from "@components/stockdetail/chart/Chart";
import Information from "@components/stockdetail/information/Information";
import { useState } from "react";
function StockDetail() {
  const [stockType, setStockType] = useState("order");

  const handleOrderClick = () => {
    setStockType("order");
  };
  const handleChartClick = () => {
    setStockType("chart");
  };
  const handleInformationClick = () => {
    setStockType("information");
  };
  return (
    <main className="text-primary_txt-default">
      <div className="flex justify-center text-secondary_txt-default bg-secondary_bg-default border-b-2 border-secondary_txt-default">
        <div className={`flex flex-1 ${stockType === "order" ? "text-primary_txt-default font-bold bg-primary_bg-default" : ""}`}>
          <button className="flex-1" onClick={handleOrderClick}>주문</button>
        </div>
        <div className={`flex flex-1 ${stockType === "chart" ? "text-primary_txt-default font-bold bg-primary_bg-default" : ""}`}>
          <button className="flex-1" onClick={handleChartClick}>차트</button>
        </div>
        <div className={`flex flex-1 ${stockType === "information" ? "text-primary_txt-default font-bold bg-primary_bg-default" : ""}`}>
          <button className="flex-1" onClick={handleInformationClick}>정보</button>
        </div>
      </div>
      {stockType === "order" && <Order />}
      {stockType === "chart" && <Chart />}
      {stockType === "information" && <Information />}
    </main>
  );
}

export default StockDetail;

