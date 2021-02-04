module.exports = ({ playerPick, opponentPick }) => {
  if (playerPick === opponentPick) return 'draw'

  const playerWin =
    (playerPick === 'paper' && opponentPick === 'rock') ||
    (playerPick === 'rock' && opponentPick === 'scissors') ||
    (playerPick === 'scissors' && opponentPick === 'paper')

  return playerWin ? 'player' : 'oppponent'
}
