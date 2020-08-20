import React, { useState } from "react";
import "./App.css";
import Header from "./components/header/Header";
import Sidebar from "./components/sidebar/Sidebar";
import RecommendedVideos from "./components/recommendedVideos/RecommendedVideos";
import SearchPage from "./pages/searchPage/SearchPage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const [toggle, setToggle] = useState(false);
  const [searchedVideos, setSearchedVideos] = useState([])

  return (
    <div className="App">
      <Router>
        <Header toggle={toggle} setToggle={setToggle} setSearchedVideos={setSearchedVideos} />
        <Switch>
          <Route exact path="/">
            <div className="appPage">
              <Sidebar toggle={toggle} />
              <RecommendedVideos toggle={toggle} />
            </div>
          </Route>
          <Route path="/search/:searchTerm">
            <div className="appPage">
              <Sidebar toggle={toggle} />
              <SearchPage toggle={toggle} />
            </div>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
