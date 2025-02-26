import { useAuth } from "../context/AuthContext";

function Home() {
  const { logout } = useAuth();

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <button className="bg-secondary_bg-default px-12 py-4 mb-5">
        랭킹 보기
      </button>
      <button className="bg-secondary_bg-default px-12 py-4 mb-5">
        회차 보기
      </button>
      <button className="bg-secondary_bg-default px-12 py-4">시작하기</button>
      <button
        onClick={logout}
        className="bg-red-500 text-white px-12 py-4 mb-5"
      >
        로그아웃
      </button>
    </div>
  );
}

export default Home;
