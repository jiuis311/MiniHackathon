let score;

const initScore = () => {
  score = 0;
}

const addScore = (n) => {
  score += n;
}

const getScore = () => {
  return score;
}

module.exports = {
  initScore,
  addScore,
  getScore
}
