function Buy() {
  return (
    <main className="p-8 bg-primary_bg-default text-primary_txt-default">
      <div className="flex flex-col gap-y-10">
        <div className="flex justify-between border-2 border-secondary_bg-default px-4 py-1">
          <p>수량</p>
          <input className="text-end" value="0" type="text" />
        </div>
        <div className="flex justify-between border-2 border-secondary_bg-default px-4 py-1">
          <p>가격</p>
          <p>1,111 KRW</p>
        </div>
        <div className="flex justify-between border-2 border-secondary_bg-default px-4 py-1">
          <p>총액</p>
          <p>0 KRW</p>
        </div>
      </div>
      <button className="mt-11 mb-11 w-[260px] h-[70px] bg-bull-default text-primary_bg-default font-bold text-2xl">매수</button>
    </main>
  );
}

export default Buy;
