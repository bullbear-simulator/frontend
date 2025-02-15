import Order from "@components/stockdetail/order/Order";
function StockDetail() {
  return (
    <main className="text-primary_txt-default">
      <div className="flex justify-center text-secondary_txt-default bg-secondary_bg-default border-b-2 border-secondary_txt-default">
        <button className="flex-1">주문</button>
        <button className="flex-1">차트</button>
        <button className="flex-1">정보</button>
      </div>
      <Order />
    </main>
  );
}

export default StockDetail;

