import React, { useEffect } from 'react';

const App = ({ getAllStock }) => {
  useEffect(() => {
    getAllStock();
  });
  return <div className="App">Hello world!</div>;
};

export default App;
