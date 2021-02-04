const gameResult = require('../../src/utils/gameResult')

describe('gameResult', () => {
  it('should be able to process right results', () => {
    const result1 = gameResult({ playerPick: 'rock', opponentPick: 'scissors' })
    expect(result1).toBe('player')
  })
})
