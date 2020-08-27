import React from 'react';
import useGlobal from '../store';
import Honor from './Honor';
import stageHonors from '../utils/stageHonors';

function Stages() {
  const [state] = useGlobal();
  const { stages } = state;
  const completed = stages.filter((s) => (s.completed));
  return (
    <div className="stages">
      {completed.length > 0 &&
        <h3>
          Stages
        </h3>
      }
      <ul>
        {completed.map((stage) => (
          <li
            key={stage.number}
            className="stage"
          >
            <div
              className="stage-location"
            >
              {stage.number}. {stage.location}, {stage.distance}, {stage.type}
            </div>
            <ul className="stage-results">
              {stageHonors.map((h) => (
                <Honor key={h.key} winner={stage[h.key]} src={h.src} alt={h.key} />
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Stages;
