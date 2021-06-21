import React from 'react';
import { useParams } from 'react-router-dom';
import useGlobal from '../store';
import Managers from './Managers';
import Teams from './Teams';
import Stages from './Stages';

function Main() {
  const { edition } = useParams();
  const [state] = useGlobal();
  const { editions } = state;
  const { stages } = editions[edition];
  const active = stages.filter((s) => (s.completed)).length > 0;
  return (
    <div className="row">
      <div className="column">
        <Managers edition={edition} />
      </div>
      { active 
        ? 
        <div className="column">
          <Stages edition={edition} />
        </div>
        :
        <div className="column">
          <Teams edition={edition} />
        </div>
      }
    </div>
  );
}

export default Main;
