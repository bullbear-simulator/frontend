import { createBrowserRouter } from "react-router-dom";

import Home from "@pages/Home";
import Layout from "@components/layout";
import Exchange from "@pages/Exchange";
import StockDetail from "@pages/StockDetail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "exchange", element: <Exchange /> },
      { path: "stockdetail", element: <StockDetail /> },
    ],
  },
]);

export default router;
