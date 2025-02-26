import { createBrowserRouter } from "react-router-dom";

import Home from "@pages/Home";
import Layout from "@components/layout";
import Exchange from "@pages/Exchange";
import StockDetail from "@pages/StockDetail";
import StockMarket from "@pages/StockMarket";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "exchange", element: <Exchange /> },
      { path: "stockdetail", element: <StockDetail /> },
      { path: "stockmarket", element: <StockMarket /> },
    ],
  },
]);

export default router;
