import React from "react";
import "./main.css"
import Home from "./pages/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./component/Navbar";
import PostPage from "./pages/PostPage";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blogs/:blogId" element={<PostPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
