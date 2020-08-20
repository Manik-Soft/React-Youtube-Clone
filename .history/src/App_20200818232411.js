import React from "react";
import "./App.css";

function App() {

  const googleMapsApiKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY,

  return (
    <div className="App">
      Hey
      <span>{googleMapsApiKey}</span>
    </div>
  );
}

export default App;
