const possiblePicks = require('../utils/possiblePicks')
const jokenpo = require('../utils/jokenpo')
const GameRepository = require('../database/repositories/GameRepository')

/**
 * Aplica regras de negócio para execução de jokenpo
 * jogador vs. computador
 *
 * @param {string} playerPick escolha do jogador
 */
async function execute({ playerPick }) {
  // define escolha aleatória do servidor
  const computerPick =
    possiblePicks[Math.floor(Math.random() * possiblePicks.length - 1) + 1]

  // aplica jogo entre jogador vs. computador (servidor)
  const result = jokenpo({ playerPick, opponentPick: computerPick })

  // armazena jogo em banco de dados
  const game = await GameRepository.create({
    result,
    player: playerPick,
    opponent: computerPick,
    isComputerGame: true,
  })

  return game
}

module.exports = { execute }
