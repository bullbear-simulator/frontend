import { useState } from "react";

function Footer() {
  const [pagesType, setPagesType] = useState("");

  const handleStockClick = () => {
    setPagesType("stock");
  };
  const handleNewsClick = () => {
    setPagesType("news");
  };
  const handleMyinfoClick = () => {
    setPagesType("myinfo");
  };
  const handleOptionClick = () => {
    setPagesType("option");
  };

  return (
    <main className="flex h-[70px] bg-secondary_bg-default">
      <button onClick={handleStockClick} className={`flex flex-1 justify-center items-center ${pagesType === "stock" ? "bg-primary_bg-default border-b-8 border-b-bull-default" : ""}`}><img className="w-[30px] h-[30px]" src="src/components/assets/icons/stock.svg" alt="" /></button>
      <button onClick={handleNewsClick} className={`flex flex-1 justify-center items-center ${pagesType === "news" ? "bg-primary_bg-default border-b-8 border-b-bull-default" : ""}`}><img className="w-[30px] h-[30px]" src="src/components/assets/icons/news.svg" alt="" /></button>
      <button onClick={handleMyinfoClick} className={`flex flex-1 justify-center items-center ${pagesType === "myinfo" ? "bg-primary_bg-default border-b-8 border-b-bull-default" : ""}`}><img className="w-[30px] h-[30px]" src="src/components/assets/icons/myinfo.svg" alt="" /></button>
      <button onClick={handleOptionClick} className={`flex flex-1 justify-center items-center ${pagesType === "option" ? "bg-primary_bg-default border-b-8 border-b-bull-default" : ""}`}><img className="w-[30px] h-[30px]" src="src/components/assets/icons/option.svg" alt="" /></button>
    </main>
  );
}

export default Footer; // 기본 내보내기
