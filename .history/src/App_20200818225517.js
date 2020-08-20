import React from "react";
import "./App.css";

function App() {
  return <div className="App">
    Hey
    {process.env.REACT_APP_TEST}
  </div>;
}

export default App;
