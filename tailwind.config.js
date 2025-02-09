/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        stock: ["Poppins", "sans-serif"], // 종목명
        body: ["Lato", "sans-serif"], // 일반 text
        number: ["Roboto Mono", "monospace"], // 가격 등 숫자
      },
      color: {
        primary_txt: {
          // 기본 글자색
          default: "#1E293B",
          dark: "#E2E8F0",
        },
        primary_bg: {
          // 기본 배경색
          default: "#F8FAFC",
          dark: "#0F172A",
        },
        secondary_txt: {
          // 서브 글자색
          default: "#64748B",
          dark: "#94A3B8",
        },
        secondary_bg: {
          // 서브 배경색
          default: "#E1E6EE",
          dark: "#1C2530",
        },
        bull: {
          // 양봉, 매수 등 빨간색
          default: "#FF4C4C",
          dark: "#FF6B6B",
        },
        bear: {
          // 음봉, 매도 등 파란색
          default: "#007BFF",
          dark: "#1E90FF",
        },
      },
    },
  },
  plugins: [],
};
