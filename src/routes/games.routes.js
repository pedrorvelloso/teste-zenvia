const { Router } = require('express')

const GameController = require('../controller/GameController')
const ComputerGameController = require('../controller/ComputerGameController')

const {
  comBodyValidation,
  gameBodyValidation,
  gameFetchParamValidation,
  gameListQueryValidation,
} = require('./games.validations')

// registra router para modelo Game
const gamesRouter = Router()

/**
 * GET: /limit=number&offset=number
 * lista ultimos jogos
 */
gamesRouter.get('/', gameListQueryValidation, GameController.index)

/**
 * GET: /:id
 * lista jogo pelo id
 */
gamesRouter.get('/:id', gameFetchParamValidation, GameController.fetch)

/**
 * POST: /
 * cria jogo entre jogador vs. oponente
 */
gamesRouter.post('/', gameBodyValidation, GameController.create)

/**
 * POST: /com
 * cria jogo entre jogador vs. computador
 */
gamesRouter.post('/com', comBodyValidation, ComputerGameController.create)

module.exports = gamesRouter
