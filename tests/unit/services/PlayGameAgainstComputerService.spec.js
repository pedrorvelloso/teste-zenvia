const playGameAgainstComputerService = require('../../../src/services/PlayGameAgainstComputerService')

describe('PlayGameAgainstComputerService', () => {
  it('should be able to play game', () => {
    const result = playGameAgainstComputerService.execute({
      playerPick: 'paper',
    })

    expect(result).toBeDefined()
    expect(result).toHaveProperty('result')
    expect(result).toHaveProperty('player')
    expect(result).toHaveProperty('opponent')
  })
})
