const playGameAgainstComputerService = require('../services/PlayGameAgainstComputerService')

/**
 * concilia regra de negócio com a camada HTTP para criação de jogo
 * jogador vs. computador
 *
 * @param {object} request objeto de requisição do express
 * @param {object} response objeto de resposta do express
 */
async function create(request, response) {
  // extrai do corpo as chaves para criar o jogo
  // neste ponto a aplicação já validou o corpo da requisição
  const { player } = request.body

  // executa regra de negocio
  const gameResult = await playGameAgainstComputerService.execute({
    playerPick: player,
  })

  // retorna resposta
  return response.json(gameResult)
}

module.exports = { create }
