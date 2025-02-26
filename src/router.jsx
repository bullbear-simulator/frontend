import { createBrowserRouter } from "react-router-dom";

import Home from "@pages/Home";
import Layout from "@components/layout";
import Exchange from "@pages/Exchange";
import { Login, Callback } from "@pages/Login";
import StockDetail from "@pages/StockDetail";
import StockMarket from "@pages/StockMarket";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Login /> },
      { path: "exchange", element: <Exchange /> },
      { path: "login", element: <Login /> },
      { path: "auth/kakao", element: <Callback /> },
      { path: "home", element: <Home /> },
      { path: "stockdetail", element: <StockDetail /> },
      { path: "stockmarket", element: <StockMarket /> },
    ],
  },
]);

export default router;
