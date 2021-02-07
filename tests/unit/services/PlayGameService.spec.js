const playGameService = require('../../../src/services/PlayGameService')

describe('PlayGameService', () => {
  it('should be able to play game', () => {
    const result = playGameService.execute({
      playerPick: 'paper',
      opponentPick: 'rock',
    })

    expect(result).toBeDefined()
    expect(result).toHaveProperty('result')
    expect(result).toHaveProperty('player')
    expect(result).toHaveProperty('opponent')
  })
})
