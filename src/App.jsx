import "./App.css";
import "typeface-poppins";
import "typeface-lato";
import "typeface-roboto-mono";

import { Router } from 'react-router-dom';
import router from '@/router'; // 위에서 정의한 router 가져오기

function App() {
  return (
    <Router router={router} />
  );
}

export default App;
