import React, { useState } from "react";
import "./App.css";
import Header from "./components/header/Header";
import Sidebar from "./components/sidebar/Sidebar";
import RecommendedVideos from "./components/recommendedVideos/RecommendedVideos";

function App() {

  const [toggle, setToggle] = useState(false);

  return (
    <div className="App">
      <Header toggle={toggle} setToggle={setToggle}/>
      <div className="appPage">
        <Sidebar toggle={toggle}/>
        <RecommendedVideos toggle={toggle}/>
      </div>
    </div>
  );
}

export default App;
