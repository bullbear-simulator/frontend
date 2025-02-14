import "./App.css";
import "typeface-poppins";
import "typeface-lato";
import "typeface-roboto-mono";
import { RouterProvider } from "react-router-dom";
import router from "@/router";

function App() {
  return <RouterProvider router={router} />;
}

export default App;
