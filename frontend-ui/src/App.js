import React from "react";
import UploadForm from "./FileUpload";
import "./App.css";
import Home from "./Home";
import Navigator from "./NavigationBar";

function App() {
  return (
    <div className="App">
      <Navigator />
      <UploadForm />
      <Home />
    </div>
  );
}

export default App;
