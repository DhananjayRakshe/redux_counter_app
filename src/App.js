import React from 'react';
import './App.css';
import ComponentOne from './Components/ComponentOne/ComponentOne.js';
import ComponentTwo from './Components/ComponentTwo/ComponentTwo.js';
import ComponentThree from './Components/ComponentThree/ComponentThree.js';

function App(props) {
  return (
    <div className="App">
      <h2>Redux App</h2>
      <ComponentOne />
      <ComponentTwo />
      <ComponentThree />
    </div>
  );
}

export default App;
