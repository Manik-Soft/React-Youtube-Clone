import React from "react";
import "./App.css";

function App() {

  const apiKey = process.env.REACT_APP_FIREBASE_API_KEY,

  return (
    <div className="App">
      Hey
      <span>{apiKey}</span>
    </div>
  );
}

export default App;
