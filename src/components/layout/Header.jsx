
function Header() {
  return (
    <main className="flex h-[70px] p-[20px] gap-[20px] items-center bg-secondary_bg-default border-b-2 border-b-secondary_txt-default">
      <img className="w-[30px] h-[30px]" src="src/components/assets/icons/search.svg" alt="검색 아이콘" />
      <input className="bg-secondary_bg-default outline-none" type="text" placeholder="회사/주식명 검색" />
    </main>
  );
}

export default Header; // 기본 내보내기
