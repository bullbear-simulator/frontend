import { createContext, useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // 로그인 함수
  const login = async authorizationCode => {
    try {
      const response = await fetch("http://localhost:8080/auth/kakao", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ authorizationCode }),
        credentials: "include", // 쿠키 저장
      });

      if (response.ok) {
        console.log("로그인 성공");
        setIsAuthenticated(true);
        window.location.href = "/home";
      } else {
        console.error("로그인 실패:", await response.text());
      }
    } catch (error) {
      console.error("로그인 중 오류 발생:", error);
    }
  };

  // 로그아웃 함수
  const logout = async () => {
    try {
      await fetch("http://localhost:8080/logout", {
        method: "POST",
        credentials: "include",
      });

      console.log("로그아웃 성공");
      setIsAuthenticated(false);
      window.location.href = "/login";
    } catch (error) {
      console.error("로그아웃 실패:", error);
    }
  };

  // 모든 API 요청에서 401 감지 → 자동 로그아웃
  useEffect(() => {
    const originalFetch = window.fetch;
    window.fetch = async (...args) => {
      const response = await originalFetch(...args);
      if (response.status === 401) {
        console.warn("세션 만료 감지 → 자동 로그아웃 실행");
        logout();
      }
      return response;
    };
  }, []);

  return (
    <AuthContext.Provider value={{ login, logout, isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
