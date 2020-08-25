import React from 'react';
import useGlobal from '../store';

function Managers() {
  const [state, actions] = useGlobal();
  const { managers } = state;
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
              {manager.name}
            </div>
            <div className="manager-teams">
              <ul>
                {manager.teams.map((team) => (
                  <li
                    key={team.name}
                    onClick={() => handleTeamClick(team, manager)}
                  >
                    {team.name}
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
