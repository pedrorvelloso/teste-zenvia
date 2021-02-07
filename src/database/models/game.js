const { database, DataTypes } = require('../')

// Define modelo para Game
const Game = database.define('Game', {
  id: {
    type: DataTypes.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  },
  result: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  player: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  opponent: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  isComputerGame: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
})

module.exports = Game
