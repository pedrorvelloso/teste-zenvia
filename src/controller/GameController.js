const playGameService = require('../services/PlayGameService')

function create(request, response) {
  const { player, opponent } = request.body

  const gameResult = playGameService.execute({
    playerPick: player,
    opponentPick: opponent,
  })

  return response.json({ result: gameResult, game: { player, opponent } })
}

module.exports = { create }
