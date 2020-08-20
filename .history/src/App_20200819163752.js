import React, { useState } from "react";
import "./App.css";
import Header from "./components/header/Header";
import Sidebar from "./components/sidebar/Sidebar";
import RecommendedVideos from "./components/recommendedVideos/RecommendedVideos";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const [toggle, setToggle] = useState(false);

  return (
    <div className="App">
      <Router>
        <Header toggle={toggle} setToggle={setToggle} />
        <Switch>
          <Route path="/">
            <div className="appPage">
              <Sidebar toggle={toggle} />
              <RecommendedVideos toggle={toggle} />
            </div>
          </Route>
          <Route path="/search/:"></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
