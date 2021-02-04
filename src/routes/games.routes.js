const { Router } = require('express')
const { celebrate, Joi, Segments } = require('celebrate')

const GameController = require('../controller/GameController')
const ComputerGameController = require('../controller/ComputerGameController')

const possiblePicks = require('../utils/possiblePicks')

const gamesRouter = Router()

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

gamesRouter.post('/', gameBodyValidation, GameController.create)
gamesRouter.post('/com', comBodyValidation, ComputerGameController.create)

module.exports = gamesRouter
