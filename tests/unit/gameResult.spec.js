const gameResult = require('../../src/utils/gameResult')

describe('gameResult', () => {
  it('should be able to process right results', () => {
    const result1 = gameResult({ playerPick: 'rock', opponentPick: 'scissors' })
    expect(result1).toBe('player')

    const result2 = gameResult({
      playerPick: 'scissors',
      opponentPick: 'paper',
    })
    expect(result2).toBe('player')

    const result3 = gameResult({
      playerPick: 'paper',
      opponentPick: 'rock',
    })
    expect(result3).toBe('player')

    const result4 = gameResult({ opponentPick: 'rock', playerPick: 'scissors' })
    expect(result4).toBe('opponent')

    const result5 = gameResult({
      opponentPick: 'scissors',
      playerPick: 'paper',
    })
    expect(result5).toBe('opponent')

    const result6 = gameResult({
      opponentPick: 'paper',
      playerPick: 'rock',
    })
    expect(result6).toBe('opponent')

    const result7 = gameResult({
      opponentPick: 'paper',
      playerPick: 'paper',
    })
    expect(result7).toBe('draw')
  })

  it('should throw within bad pick', () => {
    expect(() =>
      gameResult({
        opponentPick: 'paper',
        playerPick: 'laser',
      }),
    ).toThrow(Error)
  })
})
