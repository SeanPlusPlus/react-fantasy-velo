import React from 'react';
import useGlobal from '../store';
import Nav from './Nav';
import Managers from './Managers';
import Teams from './Teams';
import Stages from './Stages';
import '../styles/App.css';

function Main() {
  const [state] = useGlobal();
  const { stages } = state;
  const active = stages.filter((s) => (s.completed)).length > 0;
  return (
    <div className="App container">
      <div className="row">
        <div className="column">
          <Managers />
        </div>
        { active 
          ? 
          <div className="column">
            <Stages />
          </div>
          :
          <div className="column">
            <Teams />
          </div>
        }
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
