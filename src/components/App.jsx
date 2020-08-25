import React from 'react';
import Nav from './Nav';
import Teams from './Teams';
import Managers from './Managers';
import './App.css';

function Main() {
  return (
    <div className="App container">
      <div className="row">
        <div className="column">
          <Managers />
        </div>
        <div className="column">
          <Teams />
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <>
      <Nav />
      <Main />
    </>
  )
}

export default App;
