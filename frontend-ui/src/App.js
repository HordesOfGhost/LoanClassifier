import React from "react";

import "./App.css";

import UploadForm from "./FileUpload";
import Home from "./Home";
import Navigator from "./NavigationBar";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Navigator />
        <Routes>
          <Route path="/batchprocessing" element={<UploadForm />} />
          <Route path="/" element={<Home />} exact />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
