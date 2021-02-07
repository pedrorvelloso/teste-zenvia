const possiblePicks = require('../utils/possiblePicks')
const jokenpo = require('../utils/jokenpo')

/**
 * Aplica regras de negócio para execução de jokenpo
 * jogador vs. computador
 *
 * @param {string} playerPick escolha do jogador
 */
function execute({ playerPick }) {
  // define escolha aleatória do servidor
  const computerPick =
    possiblePicks[Math.floor(Math.random() * possiblePicks.length - 1) + 1]
  // objeto do game para retorno no controller
  const game = { player: playerPick, computer: computerPick }

  // aplica jogo entre jogador vs. computador (servidor)
  const result = jokenpo({ playerPick, opponentPick: computerPick })

  return { result: result === 'opponent' ? 'computer' : result, game }
}

module.exports = { execute }
