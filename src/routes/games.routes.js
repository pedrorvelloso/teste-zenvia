const { Router } = require('express')
const { celebrate, Joi, Segments } = require('celebrate')

const GameController = require('../controller/GameController')

const possiblePicks = ['paper', 'rock', 'scissors']

const gamesRouter = Router()

const bodyValidation = celebrate({
  [Segments.BODY]: {
    player: Joi.string()
      .valid(...possiblePicks)
      .required(),
    opponent: Joi.string()
      .valid(...possiblePicks)
      .required(),
  },
})

gamesRouter.post('/', bodyValidation, GameController.create)

module.exports = gamesRouter
