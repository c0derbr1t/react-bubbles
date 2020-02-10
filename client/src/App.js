import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Login from "./components/Login";
import BubblePage from "./components/BubblePage";
import PrivateRoute from './components/PrivateRoute';
import "./styles.scss";

function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path="/" component={Login} />
        {/* 
          Build a PrivateRoute component that will 
          display BubblePage when you're authenticated 
        */}
        <PrivateRoute path="/bubble-page" component={BubblePage} />
      </div>
    </Router>
  );
}

export default App;

/*
[
  {
    color: "aliceblue",
    code: {
      hex: "#f0f8ff"
    },
    id: 1
  },
  {
    color: "limegreen",
    code: {
      hex: "#99ddbc"
    },
    id: 2
  }
]
*/
