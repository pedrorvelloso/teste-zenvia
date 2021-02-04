const { Router } = require('express')
const GameController = require('../controller/GameController')

const gamesRouter = Router()

gamesRouter.post('/', GameController.create)

module.exports = gamesRouter
