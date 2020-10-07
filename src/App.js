import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';
import React from 'react';
import BeerList from './components/BeerList';
import Favourites from './components/Favourites';
import NavBar from './components/NavBar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.scss';

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route path="/demo-project/favourites" exact component={Favourites} />
        <Route path="/demo-project/" exact component={BeerList} />
      </Switch>
    </Router>
  );
}

export default App;
