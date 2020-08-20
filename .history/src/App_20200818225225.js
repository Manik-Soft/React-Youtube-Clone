import React from "react";
import "./App.css";

function App() {
  return <div className="App">
    Hey
    {process.env.FIREBASE_API_KEY}
  </div>;
}

export default App;
