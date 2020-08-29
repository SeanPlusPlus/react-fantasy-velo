import _orderBy from 'lodash/orderBy';
import _find from 'lodash/find';
import stageHonors from '../utils/stageHonors';


function getTeamScore(manager, scores) {
  const teams = manager.teams.map((team) => ({
    ...team,
    score: scores[team.name],
  }));
  return teams;
}

function getManagerScore(teams) {
  const total = teams.reduce((a, b) => ({ score: a.score + b.score }));
  const { score } = total;
  return score;
}

function getScore(manager, stages, teams) {
  const completed = stages.filter((s) => (s.completed));
  if (completed.length === 0) {
    return manager;
  }

  const scores = {};

  teams.forEach((t) => {
    scores[t.name] = 0;
  });

  completed.forEach((stage) => {
    stageHonors.forEach((honor) => {
      const { key } = honor
      const points = stage[key].points;
      const team = stage[key].team;
      const exists = _find(teams, {name: team});

      // catches typo in team name
      if (team && !exists) { 
        const e = `Team not found: ${team}, ${key}`;
        throw new Error(e);
      }

      scores[team] += points;
    });
  });

  const teamsWithScores = _orderBy(
    getTeamScore(manager, scores), 'score', 'desc'
  );
  
  const managerScore = getManagerScore(teamsWithScores);
  
  return {
    ...manager,
    score: managerScore,
    teams: teamsWithScores,
  }
}

export default getScore;
