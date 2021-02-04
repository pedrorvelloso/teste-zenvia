const { Router } = require('express')

const gamesRouter = require('./games.routes')

const routes = Router()

routes.use('/game', gamesRouter)

module.exports = routes
