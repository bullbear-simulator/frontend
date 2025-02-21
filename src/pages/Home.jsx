import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  useEffect(() => {
    const token = getCookie("Authorization");
    if (!token) {
      navigate("/login");
    } else {
      console.log("로그인 확인 완료, 쿠키가 존재합니다.");
    }
  }, [navigate]);

  function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) {
      return parts.pop().split(";")[0];
    }
    return null;
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-2xl font-bold mb-5">홈 화면</h1>
      <button className="bg-secondary_bg-default font-body text-primary_txt-default px-12 py-4 mb-5">
        랭킹 보기
      </button>
      <button className="bg-secondary_bg-default text-primary_txt-default px-12 py-4 mb-5">
        회차 보기
      </button>
      <button className="bg-secondary_bg-default text-primary_txt-default px-12 py-4">
        시작하기
      </button>
    </div>
  );
}

export default Home;
