import { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Form from "./Form";
import Result from "./Result";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Form />} />
          <Route path="/results" element={<Result />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
