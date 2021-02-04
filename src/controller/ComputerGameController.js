const playGameAgainstComputerService = require('../services/PlayGameAgainstComputerService')

function create(request, response) {
  const { player } = request.body

  const gameResult = playGameAgainstComputerService.execute({
    playerPick: player,
  })

  return response.json(gameResult)
}

module.exports = { create }
