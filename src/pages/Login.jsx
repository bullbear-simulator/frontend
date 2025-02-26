import Helmet from "react-helmet";
import { useState, useEffect, useRef } from "react";
import kakaoLogo from "../assets/icons/kakao.svg";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Login() {
  const KAKAO_REST_API_KEY = import.meta.env.VITE_KAKAO_REST_API_KEY;
  const REDIRECT_URI = import.meta.env.VITE_KAKAO_REDIRECT_URI;
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();

  const loginHandler = () => {
    const url = `https://kauth.kakao.com/oauth/authorize?client_id=${KAKAO_REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;
    window.location.href = url;
  };

  useEffect(() => {
    if (isAuthenticated) {
      console.log("이미 로그인 상태 → 홈으로 이동");
      navigate("/home");
    }
  }, [isAuthenticated, navigate]);

  return (
    <>
      <Helmet>
        <title>로그인</title>
        <meta name="description" content="카카오 로그인 페이지" />
      </Helmet>
      <div className="flex flex-col justify-end h-screen">
        <div className="flex-grow" />
        <button
          onClick={loginHandler}
          className="bg-yellow-300 font-body text-primary_txt-default px-12 mx-auto mb-[30%] flex items-center justify-center"
        >
          <img
            src={kakaoLogo}
            alt="Kakao Logo"
            className="h-[50px] w-[50px] mr-[20px]"
          />
          <span className="ml-[12px]">카카오톡 계정으로 로그인</span>
        </button>
      </div>
    </>
  );
}

function Callback() {
  const navigate = useNavigate();
  const [message, setMessage] = useState("로그인 중...");
  const isRequestSent = useRef(false);
  const { login } = useAuth();

  useEffect(() => {
    if (isRequestSent.current) return;
    isRequestSent.current = true;

    const code = new URLSearchParams(window.location.search).get("code");

    if (code) {
      login(code)
        .then(() => {
          setMessage("로그인 성공!!");
        })
        .catch(() => {
          console.error("로그인 중 오류 발생. 다시 시도해 주세요.");
          navigate("/login");
        });
    } else {
      alert("로그인 코드가 없습니다. 다시 시도해 주세요.");
      navigate("/login");
    }
  }, [navigate, login]);

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="text-lg font-bold">{message}</div>
    </div>
  );
}

export { Login, Callback };
