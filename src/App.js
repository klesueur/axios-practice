import React from 'react';
import Axios from 'axios';
import './App.css';
import PokeRequest from './components/PokeRequest';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Axios Practice with Pokemon</h1>
        <PokeRequest />
      </header>
    </div>
  );
}

export default App;
