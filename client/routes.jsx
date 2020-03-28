import React from "react";
import { BrowserRouter as Router, Switch, Route as R } from "react-router-dom";

import css from "./styles.css";

import Nav from "./components/nav";

import BoardDisplayTest from './components/board/test-display';

export default function App() {
  return (
    <Router>
      <div className={css.container}>
        <Nav />
        <div className={css.pageContent}>
          <Switch>
            <R path="/test/board/">
              <BoardDisplayTest />
            </R>
            <R path="/">
              <div>
                <h1>Miniature Metropolises</h1>
              </div>
            </R>
          </Switch>
        </div>
      </div>
    </Router>
  );
}
