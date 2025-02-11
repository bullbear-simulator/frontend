import "./App.css";
import "typeface-poppins";
import "typeface-lato";
import "typeface-roboto-mono";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Login, Callback } from "./pages/login";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />{" "}
          <Route path="/auth/kakao" element={<Callback />} />{" "}
        </Routes>
      </Router>
    </>
  );
}

export default App;
