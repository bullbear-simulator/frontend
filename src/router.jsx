import { createBrowserRouter } from "react-router-dom";

import Home from "@pages/Home";
import Layout from "@components/layout";
import Exchange from "@pages/Exchange";
import { Login, Callback } from "@pages/Login";
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
    ],
  },
]);

export default router;
