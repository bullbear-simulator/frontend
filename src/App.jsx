import "./App.css";
import "typeface-poppins";
import "typeface-lato";
import "typeface-roboto-mono";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Login, Callback } from "./pages/login";
import Home from "./pages/home";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/auth/kakao" element={<Callback />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
