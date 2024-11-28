import "./App.scss";
import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Index from "./pages/indexPage/index.jsx";
import SchInfo from "./pages/schInfoPage/schInfo.jsx";

function App() {
  return (
    // {<>
    //   <div>我是首頁</div>
    //   <button type="button" className="btn btn-primary">
    //     Primary
    //   </button>
    //   <i className="bi bi-6-circle-fill"></i>
    // </>}
  <Router>
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/schInfo" element={<SchInfo/>} />
      <Route path="*" element={<h1>找不到頁面</h1>} />
    </Routes>
  </Router>
  );
}

export default App;
