import { createBrowserRouter } from "react-router-dom";

import Home from "@pages/Home";
import Layout from "@components/layout";
import Exchange from "@pages/Exchange";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "exchange", element: <Exchange /> },
    ],
  },
]);

export default router;
