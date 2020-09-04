import React from 'react';
import _reverse from 'lodash/reverse';
import useGlobal from '../store';
import Honor from './Honor';
import stageHonors from '../utils/stageHonors';

function Stages() {
  const [state] = useGlobal();
  const { stages, managers } = state;
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
              {stage.number}. {stage.location}, {stage.distance}, {stage.type}
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
