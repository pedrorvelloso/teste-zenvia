const possiblePicks = require('./possiblePicks')

module.exports = ({ playerPick, opponentPick }) => {
  if (
    !possiblePicks.includes(playerPick) ||
    !possiblePicks.includes(opponentPick)
  )
    throw new Error('Bad pick option')

  if (playerPick === opponentPick) return 'draw'

  const playerWin =
    (playerPick === 'paper' && opponentPick === 'rock') ||
    (playerPick === 'rock' && opponentPick === 'scissors') ||
    (playerPick === 'scissors' && opponentPick === 'paper')

  return playerWin ? 'player' : 'opponent'
}
