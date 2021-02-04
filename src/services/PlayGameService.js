function execute({ playerPick, opponentPick }) {
  const playerWin =
    (playerPick === 'paper' && opponentPick === 'rock') ||
    (playerPick === 'rock' && opponentPick === 'scissors') ||
    (playerPick === 'scissors' && opponentPick === 'paper')

  if (playerPick === opponentPick) return 'draw'

  return playerWin ? 'player' : 'opponent'
}

module.exports = { execute }
