const jokenpo = require('../../src/utils/jokenpo')

describe('jokenpo', () => {
  it('should be able to process right results', () => {
    const result1 = jokenpo({ playerPick: 'rock', opponentPick: 'scissors' })
    expect(result1).toBe('player')

    const result2 = jokenpo({
      playerPick: 'scissors',
      opponentPick: 'paper',
    })
    expect(result2).toBe('player')

    const result3 = jokenpo({
      playerPick: 'paper',
      opponentPick: 'rock',
    })
    expect(result3).toBe('player')

    const result4 = jokenpo({ opponentPick: 'rock', playerPick: 'scissors' })
    expect(result4).toBe('opponent')

    const result5 = jokenpo({
      opponentPick: 'scissors',
      playerPick: 'paper',
    })
    expect(result5).toBe('opponent')

    const result6 = jokenpo({
      opponentPick: 'paper',
      playerPick: 'rock',
    })
    expect(result6).toBe('opponent')

    const result7 = jokenpo({
      opponentPick: 'paper',
      playerPick: 'paper',
    })
    expect(result7).toBe('draw')
  })

  it('should throw within bad pick', () => {
    expect(() =>
      jokenpo({
        opponentPick: 'paper',
        playerPick: 'laser',
      }),
    ).toThrow(Error)
  })
})
