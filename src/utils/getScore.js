import stageHonors from '../utils/stageHonors';

function getScore(manager, stages, teams) {
  const completed = stages.filter((s) => (s.completed));
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
  })

  console.log('scores', scores);
  
  return {
    ...manager,
    score: completed.length || '', // TODO
  }
}

export default getScore;