import React from 'react';
import orderBy from 'lodash/orderBy';
import useGlobal from '../store';
import getScore from '../utils/getScore';

function Managers() {
  const [state, actions] = useGlobal();
  const { stages, teams } = state;
  const managers = orderBy(
    state.managers.map((m) => getScore(m, stages, teams)), 'score', 'desc'
  );
  const active = stages.filter((s) => (s.completed)).length > 0;
  const { setActiveManager, setReleasedTeam } = actions;
  function handleManagerClick(manager) {
    if (active) {
      return;
    }
    setActiveManager(manager);
  }
  function handleTeamClick(team, manager) {
    if (active) {
      return;
    }
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
