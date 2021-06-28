import React from 'react';
import _reverse from 'lodash/reverse';
import useGlobal from '../store';
import Honor from './Honor';
import stageHonors from '../utils/stageHonors';

function Stages({ edition }) {
  const [state] = useGlobal();
  const { editions } = state;
  const { stages, managers } = editions[edition];
  const completed = _reverse(stages.filter((s) => (s.completed)));
  const teams = {};
  managers.forEach((manager) => {
    manager.teams.forEach((team) => {
      teams[team.name] = manager.name;
    });
  });
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
              {stage.number}. {stage.location}, {stage.distance}
            </div>
            <ul className="stage-results">
              {stageHonors.map((h) => (
                <Honor
                  key={h.key}
                  winner={stage[h.key]}
                  src={h.src}
                  alt={h.key}
                  points={h.points}
                  teams={teams}
                />
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Stages;
