const { database } = require('../../../src/database')
const playGameAgainstComputerService = require('../../../src/services/PlayGameAgainstComputerService')

describe('PlayGameAgainstComputerService', () => {
  beforeEach(async () => {
    await database.sync({ force: true })
  })

  afterEach(async () => {
    await database.dropAllSchemas()
  })

  it('should be able to play game', async () => {
    const result = await playGameAgainstComputerService.execute({
      playerPick: 'paper',
    })

    expect(result).toBeDefined()
    expect(result).toHaveProperty('result')
    expect(result).toHaveProperty('player')
    expect(result).toHaveProperty('opponent')
  })
})
