const jokenpo = require('../utils/jokenpo')

/**
 * Aplica regras de negócio para execução de jokenpo
 * jogador vs. oponente
 *
 * @param {string} playerPick escolha do jogador
 * @param {string} opponentPick escolha do adversário
 */
function execute({ playerPick, opponentPick }) {
  // aplica regras de negócio para execução da partida
  const result = jokenpo({ playerPick, opponentPick })

  return {
    result,
    player: playerPick,
    opponent: opponentPick,
    isComputerGame: false,
  }
}

module.exports = { execute }
