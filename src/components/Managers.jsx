import React from 'react';
import useGlobal from '../store';
import getScore from '../utils/getScore';

function Managers() {
  const [state, actions] = useGlobal();
  const { stages, teams } = state;
  const managers = state.managers.map((m) => getScore(m, stages, teams));
  const { setActiveManager, setReleasedTeam } = actions;
  function handleManagerClick(manager) {
    setActiveManager(manager);
  }
  function handleTeamClick(team, manager) {
    setReleasedTeam(team, manager);
  }
  return (
    <div className="Managers">
      <h3>
        Managers
      </h3>
      <ul>
        {managers.map((manager) => (
          <li
            key={manager.name}
            className="manager"
          >
            <div
              onClick={() => handleManagerClick(manager)}
              className={'manager-name' + (manager.active ? ' active' : '')}
            >
              {manager.name} <code>{manager.score}</code>
            </div>
            <div className="manager-teams">
              <ul>
                {manager.teams.map((team) => (
                  <li
                    key={team.name}
                    onClick={() => handleTeamClick(team, manager)}
                  >
                    {team.name} <code>{team.score}</code>
                  </li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Managers;
