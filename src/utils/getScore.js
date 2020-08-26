function getScore(manager, stages) {
  console.log('manager', manager);
  console.log('stages', stages);
  return {
    ...manager,
    score: 15,
  }
}

export default getScore;