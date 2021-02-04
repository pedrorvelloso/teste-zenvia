const gameResult = require('../utils/gameResult')

function execute({ playerPick, opponentPick }) {
  const result = gameResult({ playerPick, opponentPick })

  return result
}

module.exports = { execute }
