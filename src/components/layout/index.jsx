import { Outlet } from "react-router-dom";
import Header from "@components/layout/Header";
import Footer from "@components/layout/Footer";

function Layout() {
  return (
    <div className="max-w-iphone-14-pro-max">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Layout; // 기본 내보내기
