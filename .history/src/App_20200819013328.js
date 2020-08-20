import React from "react";
import "./App.css";
import Header from "./components/header/Header";
import Sidebar from "./components/sidebar/Sidebar";
import RecomendedVideos from "./components/recomendedVideos/RecomendedVideos";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="appPage">
        <Sidebar />
        <RecomendedVideos/>
      </div>
    </div>
  );
}

export default App;
