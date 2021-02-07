const GameRepository = require('../database/repositories/GameRepository')

/**
 * Aplica regras de negócio para listar ultimos jogos (paginado)
 *
 * @param {number} limit limite da paginação
 * @param {number} offset offset da paginação
 */
async function execute({ limit, offset }) {
  // executa consulta em banco de dados
  const records = await GameRepository.find({ limit, offset })

  // retorna lista de jogos
  return records
}

module.exports = { execute }
