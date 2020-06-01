import React, { useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from '../Header';
import Home from '../Pages/Home';
import NotFound from '../Pages/NotFound';

const App = ({ getAllStock }) => {
  useEffect(() => {
    getAllStock();
  });
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route component={NotFound} />
      </Switch>
    </div>
  );
};

export default App;
