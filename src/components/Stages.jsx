import React from 'react';
import Honor from './Honor';
import useGlobal from '../store';
import trophy from '../images/trophy.png'
import yellow from '../images/yellow.png'
import green from '../images/green.png'
import polkadot from '../images/polkadot.png'
import white from '../images/white.png'
import combativity from '../images/combativity.png'
import teams from '../images/teams.png'

const honors = [
  {
    key: 'winner', src: trophy,
  },
  {
    key: 'yellow', src: yellow,
  },
  {
    key: 'green', src: green,
  },
  {
    key: 'polkadot', src: polkadot,
  },
  {
    key: 'white', src: white,
  },
  {
    key: 'combativity', src: combativity,
  },
  {
    key: 'teams', src: teams,
  },
];

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
              {honors.map((h) => (
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
