const playGameService = require('../services/PlayGameService')

/**
 * concilia regra de negócio com a camada HTTP para criação de jogo
 * jogador vs. oponente
 *
 * @param {object} request objeto de requisição do express
 * @param {object} response objeto de resposta do express
 */
function create(request, response) {
  // extrai do corpo as chaves para criar o jogo
  // neste ponto a aplicação já validou o corpo da requisição
  const { player, opponent } = request.body

  // executa regra de negocio
  const gameResult = playGameService.execute({
    playerPick: player,
    opponentPick: opponent,
  })

  // retorna resposta
  return response.json(gameResult)
}

module.exports = { create }
