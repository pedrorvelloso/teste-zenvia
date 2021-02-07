const possiblePicks = require('./possiblePicks')

/**
 * Retorna o ganhador da partida de jokenpo
 *
 * @param {string} playerPick escolha do jogador
 * @param {string} opponentPick escolha do adversário
 */
module.exports = ({ playerPick, opponentPick }) => {
  // caso a escolha do jogador/oponente não seja valida joga um novo Erro
  if (
    !possiblePicks.includes(playerPick) ||
    !possiblePicks.includes(opponentPick)
  )
    throw new Error('Bad pick option')

  // válida empate caso as escolhas sejam iguais
  if (playerPick === opponentPick) return 'draw'

  // verifica se o jogador foi vencedor
  const playerWin =
    (playerPick === 'paper' && opponentPick === 'rock') ||
    (playerPick === 'rock' && opponentPick === 'scissors') ||
    (playerPick === 'scissors' && opponentPick === 'paper')

  // caso jogador não seja vencedor declara oponente como vitorioso
  return playerWin ? 'player' : 'opponent'
}
