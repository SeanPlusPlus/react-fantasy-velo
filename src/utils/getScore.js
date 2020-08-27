function getScore(manager, stages) {
  const completed = stages.filter((s) => (s.completed));
  
  return {
    ...manager,
    score: completed.length || '', // TODO
  }
}

export default getScore;