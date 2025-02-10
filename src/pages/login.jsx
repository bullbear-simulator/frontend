import Helmet from "react-helmet";
import { useEffect } from "react";

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
      <button onClick={loginHandler}>카카오</button>
    </>
  );
}

function Callback() {
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const code = params.get("code");

    if (code) {
      fetch("https://kauth.kakao.com/oauth/token", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({
          grant_type: "authorization_code",
          client_id: "08f6fb6d41c553e165e98c0201582fdd",
          redirect_uri: "http://localhost:8080/auth/kakao",
          code: code,
        }),
      })
        .then(response => {
          if (!response.ok) {
            throw new Error("Token request failed");
          }
          return response.json();
        })
        .then(data => {
          console.log("Access Token:", data.access_token);
          fetchUserInfo(data.access_token);
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
