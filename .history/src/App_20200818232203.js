import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      Hey
      <span>{process.env.REACT_APP_FIREBASE_API_KEY}</span>
    </div>
  );
}

export default App;
