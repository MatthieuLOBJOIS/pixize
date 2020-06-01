import React, { useEffect } from 'react';

import Home from '../Pages/Home';
import NotFound from '../Pages/NotFound'

import {
  Switch,
  Route,
} from "react-router-dom";

const App = ({ getAllStock }) => {
  useEffect(() => {
    getAllStock();
  });
  return <div className="App">
    <Switch>
      <Route exact path="/" component={Home} />
      <Route component={NotFound} />
    </Switch>
  </div>;
};

export default App;
