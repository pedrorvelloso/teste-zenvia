const GameRepository = require('../database/repositories/GameRepository')
const ApplicationError = require('../errors/ApplicationError')

/**
 * Aplica regras de negócio para listar jogo pelo ID
 *
 * @param {number} id ID do jogo
 */
async function execute({ id }) {
  // executa consulta em banco de dados
  const game = await GameRepository.findById(id)

  // caso não ache o game joga um novo erro de Aplicação
  if (!game)
    throw new ApplicationError('Not found', `game with id ${id} not found`, 404)

  // retorna o jogo
  return game
}

module.exports = { execute }
