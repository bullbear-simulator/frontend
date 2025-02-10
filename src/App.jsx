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
          {/* component prop을 element prop으로 변경 */}
          <Route path="/auth/kakao" element={<Callback />} />{" "}
          {/* component prop을 element prop으로 변경 */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
