import React from 'react';
import axios from 'axios';
import { Switch, Route } from 'react-router-dom'
import { NavLink } from 'react-router-dom';
import './App.css';

import AllBeers from './components/AllBeers';
import RandomBeer from './components/RandomBeer';
import NewBeer from './components/NewBeer'

function App() {
  return (
    <div className="App">
      <ul>
       <li>
          <NavLink to='/allbeers'>All Beers</NavLink>
       </li>
       <li>
        <NavLink to='/randombeer'>Random Beer</NavLink>
       </li>
       <li>
        <NavLink to='/newbeer'>New Beer</NavLink>
       </li>
      </ul>
      <Switch>
        <Route exact path="/allbeers" component={AllBeers} />
        <Route exact path="/randombeer" component={RandomBeer} />
        <Route exact path="/newbeer" component={NewBeer} />
      </Switch>
    </div>
  );
}

export default App;
