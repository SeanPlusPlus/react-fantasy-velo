import React from 'react';
import useGlobal from '../store';
import Managers from './Managers';
import Teams from './Teams';
import Stages from './Stages';

function Main() {
  const [state] = useGlobal();
  const { stages } = state;
  const active = stages.filter((s) => (s.completed)).length > 0;
  return (
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
  );
}

export default Main;
