import React from "react";
import "./App.css";

function App() {
  return <div className="App">
    Hey
    {process.env.REACT_APP_TITLE}
  </div>;
}

export default App;
