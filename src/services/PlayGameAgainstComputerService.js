const possiblePicks = require('../utils/possiblePicks')
const gameResult = require('../utils/gameResult')

function execute({ playerPick }) {
  const computerPick =
    possiblePicks[Math.floor(Math.random() * possiblePicks.length - 1) + 1]
  const game = { player: playerPick, computer: computerPick }

  const result = gameResult({ playerPick, opponentPick: computerPick })

  return { result: result === 'oppponent' ? 'computer' : result, game }
}

module.exports = { execute }
