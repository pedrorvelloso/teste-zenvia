const request = require('supertest')
const app = require('../../src/app')

describe('game integration', () => {
  it('should be able to play a game (player versus opponent)', async () => {
    const response = await request(app)
      .post('/games')
      .send({ player: 'paper', opponent: 'rock' })

    expect(response.status).toBe(200)
    expect(response.body).toHaveProperty('result')
    expect(response.body).toHaveProperty('player')
    expect(response.body).toHaveProperty('opponent')
  })

  it('should not be able to play a game within incorrect pick', async () => {
    const response = await request(app)
      .post('/games')
      .send({ player: 'laser', opponent: 'rock' })

    expect(response.status).toBe(400)
    expect(response.body).toHaveProperty('validation')
  })

  it('should not be able to play a game within incorrect body type', async () => {
    let response = await request(app).post('/games').send({ plyr: 'rock' })

    expect(response.status).toBe(400)
    expect(response.body).toHaveProperty('validation')

    response = await request(app).post('/games').send({ oponnent: 'rock' })

    expect(response.status).toBe(400)
    expect(response.body).toHaveProperty('validation')
  })

  it('should be able to play a game (player versus computer)', async () => {
    const response = await request(app)
      .post('/games/com')
      .send({ player: 'rock' })

    expect(response.status).toBe(200)
    expect(response.body).toHaveProperty('result')
    expect(response.body).toHaveProperty('player')
    expect(response.body).toHaveProperty('opponent')
  })

  it('should not be able to play a game (computer game) within incorrect pick', async () => {
    const response = await request(app)
      .post('/games/com')
      .send({ player: 'laser' })

    expect(response.status).toBe(400)
    expect(response.body).toHaveProperty('validation')
  })
})
