import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <div className="max-w-iphone-14-pro-max">
      <h1>레이아웃</h1>
      <Outlet />
    </div>
  );
}

export default Layout; // 기본 내보내기
