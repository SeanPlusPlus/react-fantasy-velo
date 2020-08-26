import React from 'react';
import Nav from './Nav';
import Managers from './Managers';
import Teams from './Teams';
import Stages from './Stages';
import '../styles/App.css';

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
        <div className="column">
          <Stages />
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
