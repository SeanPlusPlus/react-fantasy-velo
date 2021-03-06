import React from 'react';
import useGlobal from '../store';

function Teams({ edition }) {
  const [state, actions] = useGlobal();
  const { editions } = state;
  const { teams } = editions[edition];
  const { setActiveTeam } = actions;
  function handleClick(team) {
    setActiveTeam(team.name, edition);
  }
  return (
    <div className="teams">
      <h3>
        Teams
      </h3>
      <ul>
        {teams.map((team) => (
          <li
            key={team.name}
            className="team"
          >
            <div
              onClick={() => handleClick(team)}
              className={'team-name' + (team.picked ? ' picked' : '')}
            >
              {team.name}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Teams;
