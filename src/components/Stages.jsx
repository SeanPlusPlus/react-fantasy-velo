import React from 'react';
import useGlobal from '../store';

function Stages() {
  const [state] = useGlobal();
  const { stages } = state;
  return (
    <div className="stages">
      <h3>
        Stages
      </h3>
      <ul>
        {stages.map((stage) => (
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
              <li>Winner: {stage.winner.rider} [{stage.winner.team}]</li>
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Stages;
