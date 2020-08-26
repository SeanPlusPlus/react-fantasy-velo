import React from 'react';
import useGlobal from '../store';
import trophy from '../images/trophy.png'
import yellow from '../images/yellow.png'
import green from '../images/green.png'
import polkadot from '../images/polkadot.png'
import white from '../images/white.png'
import combativity from '../images/combativity.png'
import teams from '../images/teams.png'

function Honor(props) {
  return (
    <li>
      <img className="jersey" src={props.src} alt={props.alt} />
      <span className="rider">
        {props.winner.rider} [{props.winner.team}]
      </span>
    </li>
  )
}

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
              <Honor winner={stage.winner} src={trophy} alt="trophy" />
              <Honor winner={stage.yellow} src={yellow} alt="yellow" />
              <Honor winner={stage.green} src={green} alt="green" />
              <Honor winner={stage.polkadot} src={polkadot} alt="polkadot" />
              <Honor winner={stage.white} src={white} alt="white" />
              <Honor winner={stage.combativity} src={combativity} alt="combativity" />
              <Honor winner={stage.teams} src={teams} alt="teams" />
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Stages;
