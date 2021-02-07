const { Router } = require('express')
const { celebrate, Joi, Segments } = require('celebrate')

const GameController = require('../controller/GameController')
const ComputerGameController = require('../controller/ComputerGameController')

const possiblePicks = require('../utils/possiblePicks')

// registra router para modelo Game
const gamesRouter = Router()

// validação de corpo da requisição
const gameBodyValidation = celebrate({
  [Segments.BODY]: {
    player: Joi.string()
      .valid(...possiblePicks)
      .required(),
    opponent: Joi.string()
      .valid(...possiblePicks)
      .required(),
  },
})

const comBodyValidation = celebrate({
  [Segments.BODY]: {
    player: Joi.string()
      .valid(...possiblePicks)
      .required(),
  },
})

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
