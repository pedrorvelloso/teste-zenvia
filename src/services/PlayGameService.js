const jokenpo = require('../utils/jokenpo')
const GameRepository = require('../database/repositories/GameRepository')

/**
 * Aplica regras de negócio para execução de jokenpo
 * jogador vs. oponente
 *
 * @param {string} playerPick escolha do jogador
 * @param {string} opponentPick escolha do adversário
 */
async function execute({ playerPick, opponentPick }) {
  // aplica regras de negócio para execução da partida
  const result = jokenpo({ playerPick, opponentPick })

  // armazena jogo em banco de dados
  const game = await GameRepository.create({
    result,
    player: playerPick,
    opponent: opponentPick,
  })

  return game
}

module.exports = { execute }
