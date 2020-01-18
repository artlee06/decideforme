import React from 'react';
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import MainPage from "./components/MainPage";
import RegularPage from "./components/RegularPage";
import SnekPage from "./components/SnekPage";


export default function App() {
  return (
    <Router>
      <div>
        <Route exact path="/Main" render={() => <MainPage />}/>
        <Route exact path="/Regular" render={() => <RegularPage />}/>
        <Route exact path="/Snek" render={() => <SnekPage />}/>
        <Redirect to="/Main"/>
      </div>
    </Router>
  );
}

