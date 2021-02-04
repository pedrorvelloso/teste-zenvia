const playGameService = require('../services/PlayGameService')

const create = (request, response) => {
  const { player, opponent } = request.body

  const gameResult = playGameService.execute({
    playerPick: player,
    opponentPick: opponent,
  })

  return response.json({ result: gameResult })
}

module.exports = { create }
