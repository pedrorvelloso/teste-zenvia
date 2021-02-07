const playGameService = require('../../../src/services/PlayGameService')
const { database } = require('../../../src/database')

describe('PlayGameService', () => {
  beforeEach(async () => {
    await database.sync({ force: true })
  })

  afterEach(async () => {
    await database.dropAllSchemas()
  })

  it('should be able to play game', async () => {
    const result = await playGameService.execute({
      playerPick: 'paper',
      opponentPick: 'rock',
    })

    expect(result).toBeDefined()
    expect(result).toHaveProperty('result')
    expect(result).toHaveProperty('player')
    expect(result).toHaveProperty('opponent')
  })
})
