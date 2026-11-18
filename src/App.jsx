import React from "react";

import HomePage from "./pages/HomePage";
import GamePage from "./pages/GamePage";
import SuperMarioPage from "./pages/SuperMarioBrowRemake/SuperMario.jsx";
import { HashRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/game" element={<GamePage />} />
        <Route path="/secret" element={<SuperMarioPage />} />
      </Routes>
    </Router>
  );
}

export default App;
