const { Router } = require('express')

const gamesRouter = require('./games.routes')

const routes = Router()

// Define rotas
routes.use('/games', gamesRouter)

module.exports = routes
