import Helmet from "react-helmet";
import { useState, useEffect } from "react";
import kakaoLogo from "../assets/icons/kakao.svg";
import { useNavigate } from "react-router-dom";

function Login() {
  const KAKAO_REST_API_KEY = import.meta.env.VITE_KAKAO_REST_API_KEY;
  const REDIRECT_URI = import.meta.env.VITE_KAKAO_REDIRECT_URI;

  console.log("카카오 REST API 키:", KAKAO_REST_API_KEY);
  console.log("Redirect URI:", REDIRECT_URI);

  const loginHandler = () => {
    console.log("btn click");
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
  const [message, setMessage] = useState("로그인 중...");

  useEffect(() => {
    console.log("Callback component rendered");

    const code = new URLSearchParams(window.location.search).get("code");
    console.log("인가 코드:", code);

    if (code) {
      fetch("http://localhost:8080/auth/kakao", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ authorizationCode: code }),
      })
        .then(response => {
          if (!response.ok) {
            throw new Error("Token request failed: " + response.statusText);
          }
          return response.json();
        })
        .then(data => {
          console.log("Access Token:", data.accessToken);
          localStorage.setItem("accessToken", data.accessToken);
          return fetchUserInfo(data.accessToken);
        })
        .then(userData => {
          if (userData) {
            localStorage.setItem("userInfo", JSON.stringify(userData));
            console.log("로그인 성공! 유저 정보 저장 완료");
          }
          setMessage("로그인 성공!");

          setTimeout(() => {
            navigate("/home");
          }, 1500);
        })
        .catch(error => {
          console.error("Error during token fetch:", error);
          alert("로그인 중 오류가 발생했습니다. 다시 시도해 주세요.");
          navigate("/login");
        });
    } else {
      console.log("No authorization code found.");
      alert("로그인 코드가 없습니다. 다시 시도해 주세요.");
      navigate("/login");
    }
  }, [navigate]);

  const fetchUserInfo = accessToken => {
    return fetch("https://kapi.kakao.com/v2/user/me", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })
      .then(response => {
        if (!response.ok) {
          throw new Error("User info request failed: " + response.statusText);
        }
        return response.json();
      })
      .then(userData => {
        console.log("User Data:", userData);
        return userData;
      })
      .catch(error => {
        console.error("Error fetching user info:", error);
        return null;
      });
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="text-lg font-bold">{message}</div>
    </div>
  );
}

export { Login, Callback };
