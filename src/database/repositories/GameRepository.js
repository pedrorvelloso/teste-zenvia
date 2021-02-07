const Game = require('../models/game')

/**
 * Repositório para o modelo de Games
 *
 * responsável por lidar entre a camada de banco de dados e
 * regras de negócio
 */
const GameRepository = {
  /**
   * Cria um novo jogo em banco de dados
   *
   * @param {string} result resultado do game
   * @param {string} player escolha do jogador
   * @param {string} opponent escolha do oponente
   * @param {boolean} isComputerGame define se é um jogo de jogador vs. computador
   */
  async create({ result, player, opponent, isComputerGame = false }) {
    return await Game.create({
      result,
      player,
      opponent,
      isComputerGame,
    })
  },
  /**
   * Lista jogos páginado
   *
   * @param {number} limit limite da paginação
   * @param {number} offset offset da paginação
   */
  async find({ limit = 10, offset = 0 }) {
    return await Game.findAll({ limit, offset })
  },
  /**
   * Lista jogo pelo ID
   *
   * @param {number} id ID do jogo
   */
  async findById(id) {
    return await Game.findOne({ where: { id } })
  },
}

module.exports = GameRepository
