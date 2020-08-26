function getScore(manager, stages) {
  return {
    ...manager,
    score: stages.length // TODO
  }
}

export default getScore;