import React from 'react';
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import MainPage from "./components/MainPage";
import RegularPage from "./components/RegularPage";
import SnekPage from "./components/SnekPage";
import AnswerPage from "./components/AnswerPage";


export default function App() {
  return (
    <Router>
      <div>
        <Route exact path="/Main" render={() => <MainPage />}/>
        <Route exact path="/Regular" render={() => <RegularPage />}/>
        <Route exact path="/Snek" render={() => <SnekPage />}/>
        <Route exact path="/Answer" render={() => <AnswerPage />}/>
        <Redirect to="/Main"/>
      </div>
    </Router>
  );
}

