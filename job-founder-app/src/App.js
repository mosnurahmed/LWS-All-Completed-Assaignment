import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./styles/style.css";
import "./App.css";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

import Create from "./pages/Create";
import Edit from "./pages/Edit";

function App() {
  return (
    <Router>
      <Navbar />
      <Sidebar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<Create />} />
        <Route path="/edit/:editId" element={<Edit />} />
      </Routes>
    </Router>
  );
}

export default App;
