import React from 'react';
import { Switch, Route } from 'react-router-dom'
import { NavLink } from 'react-router-dom';
import './App.css';

import Home from './components/Home';
import AllBeers from './components/AllBeers';
import RandomBeer from './components/RandomBeer';
import NewBeer from './components/NewBeer';
import BeerDetails from './components/BeerDetails';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} /> 
        <Route exact path="/allbeers" component={AllBeers} />
        <Route exact path="/randombeer" component={RandomBeer} />
        <Route exact path="/newbeer" component={NewBeer} />
        <Route exact path="/beers/:id" component={BeerDetails} /> 
      </Switch>
    </div>
  );
}

export default App;
