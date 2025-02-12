import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <div>
      <h1>레이아웃</h1>
      <Outlet />
    </div>
  );
}

export default Layout; // 기본 내보내기
