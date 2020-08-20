import React from "react";
import "./App.css";

function App() {
  return <div className="App">
    Hey
    {process.env.REACT_APP_FIREBASE_API_KEY}
  </div>;
}

export default App;
