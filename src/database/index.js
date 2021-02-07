const { Sequelize, DataTypes } = require('sequelize')

// Instancia banco de dados SQLite em memória
const database = new Sequelize('sqlite::memory', { logging: false })

// função para iniciar banco de dados com modelos criados
async function initDb() {
  await database.sync({ force: true })
}

module.exports = { database, DataTypes, initDb }
