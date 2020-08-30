import React from 'react';
import _reverse from 'lodash/reverse';
import useGlobal from '../store';
import Honor from './Honor';
import stageHonors from '../utils/stageHonors';

function Stages() {
  const [state] = useGlobal();
  const { stages } = state;
  const completed = _reverse(stages.filter((s) => (s.completed)));
  return (
    <div className="stages">
      <h3>
        Stages
      </h3>
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
