import Helmet from "react-helmet";
import { useEffect } from "react";
import kakaoLogo from "../assets/icons/kakao.svg";
import { useNavigate } from "react-router-dom";

function Login() {
  const KAKAO_REST_API_KEY = "08f6fb6d41c553e165e98c0201582fdd";
  const REDIRECT_URI = "http://localhost:8080/auth/kakao";

  const loginHandler = () => {
    const url = `https://kauth.kakao.com/oauth/authorize?client_id=${KAKAO_REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;
    window.location.href = url;
  };

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

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const code = params.get("code");

    if (code) {
      fetch("http://localhost:8080/auth/kakao", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ code }),
      })
        .then(response => {
          if (!response.ok) {
            throw new Error("Token request failed");
          }
          return response.json();
        })
        .then(data => {
          console.log("Access Token:", data.accessToken);
          localStorage.setItem("accessToken", data.accessToken);
          navigate("/home");
          fetchUserInfo(data.accessToken);
        })
        .catch(error => console.error("Error:", error));
    }
  }, []);

  const fetchUserInfo = accessToken => {
    fetch("https://kapi.kakao.com/v2/user/me", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })
      .then(response => {
        if (!response.ok) {
          throw new Error("User info request failed");
        }
        return response.json();
      })
      .then(userData => {
        console.log("User Data:", userData);
      })
      .catch(error => console.error("Error:", error));
  };

  return <div>로그인 중...</div>;
}

export { Login, Callback };
