import Helmet from "helmet";

function Login() {
  const KAKAO_REST_API_KEY = "08f6fb6d41c553e165e98c0201582fdd";
  const REDIRECT_URI = "http://localhost:8080/auth/kakao";

  const loginHandler = () => {
    const url = `https://kauth.kakao.com/oauth/authorize?client_id=${KAKAO_REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;
    window.location.href = url; // 카카오 로그인 페이지로 이동
  };

  return (
    <>
      <Helmet></Helmet>
      <button onClick={loginHandler}>카카오</button>
    </>
  );
}

export default Login;
