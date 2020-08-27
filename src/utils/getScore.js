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
      const points = stage[honor.key].points;
      const team = stage[honor.key].team;
      scores[team] += points;
    });
  });

  const teamWithScores = getTeamScore(manager, scores);
  const managerScore = getManagerScore(teamWithScores);
  
  return {
    ...manager,
    score: managerScore,
    teams: teamWithScores,
  }
}

export default getScore;
