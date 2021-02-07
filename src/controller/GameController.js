const playGameService = require('../services/PlayGameService')
const listGamesService = require('../services/ListGamesService')
const fetchGameService = require('../services/FetchGameService')

/**
 * concilia regra de negócio com a camada HTTP para criação de jogo
 * jogador vs. oponente
 *
 * @param {object} request objeto de requisição do express
 * @param {object} response objeto de resposta do express
 */
async function create(request, response) {
  // extrai do corpo as chaves para criar o jogo
  // neste ponto a aplicação já validou o corpo da requisição
  const { player, opponent } = request.body

  // executa regra de negocio
  const gameResult = await playGameService.execute({
    playerPick: player,
    opponentPick: opponent,
  })

  // retorna resposta
  return response.json(gameResult)
}

/**
 * concilia regra de negócio com a camada HTTP para obter lista de jogos
 *
 * @param {object} request objeto de requisição do express
 * @param {object} response objeto de resposta do express
 */
async function index(request, response) {
  // extrai limit e offset da query string
  // neste ponto a aplicação já validou a query string da requisição
  const { limit, offset } = request.query

  // executa regra de negocio
  const games = await listGamesService.execute({ limit, offset })

  // retorna resposta
  return response.json(games)
}

/**
 * concilia regra de negócio com a camada HTTP para obter jogo pelo ID
 *
 * @param {object} request objeto de requisição do express
 * @param {object} response objeto de resposta do express
 */
async function fetch(request, response) {
  // extrai id
  // neste ponto a aplicação já validou os params da requisição
  const { id } = request.params

  // executa regra de negocio
  const game = await fetchGameService.execute({ id })

  // retorna resposta
  return response.json(game)
}

module.exports = { create, index, fetch }
