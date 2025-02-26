import Buy from "@components/stockdetail/order/Buy";
import Sell from "@components/stockdetail/order/Sell";
import { useState } from "react";

function Order() {
  const [orderType, setOrderType] = useState("buy");

  const handleBuyClick = () => {
    setOrderType("buy");
  };

  const handleSellClick = () => {
    setOrderType("sell");
  };

  return (
    <div>
      <div className="flex justify-center h-20 bg-secondary_bg-default text-secondary_txt-default">
        <div className={`flex flex-1 ${orderType === "buy" ? "text-primary_txt-default font-bold bg-primary_bg-default" : "shadow-inner"}`}>
          <button className="flex-1" onClick={handleBuyClick}>
            매수
          </button>
        </div>
        <div className={`flex flex-1 ${orderType === "sell" ? "text-primary_txt-default font-bold bg-primary_bg-default" : "shadow-inner"}`}>
          <button className="flex-1" onClick={handleSellClick}>
            매도
          </button>
        </div>
      </div>
      {orderType === "buy" && <Buy />} {/* 매수 상태일 때 Buy 컴포넌트 렌더링 */}
      {orderType === "sell" && <Sell />} {/* 매도 상태일 때 Sell 컴포넌트 렌더링 */}
    </div>
  );
}

export default Order;
