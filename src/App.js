import React, { useState } from 'react';
import './App.css';
import Header from './Components/Header';
import Log from './Components/Log';
import Session from './Components/Session'

function App() {
  return (
    <div className="App">
      <Header />
      <Session />
    </div>
  );
}

export default App;
