const { celebrate, Joi, Segments } = require('celebrate')
const possiblePicks = require('../utils/possiblePicks')

const gameBodyValidation = celebrate({
  [Segments.BODY]: {
    player: Joi.string()
      .valid(...possiblePicks)
      .required(),
    opponent: Joi.string()
      .valid(...possiblePicks)
      .required(),
  },
})

const comBodyValidation = celebrate({
  [Segments.BODY]: {
    player: Joi.string()
      .valid(...possiblePicks)
      .required(),
  },
})

const gameListQueryValidation = celebrate({
  [Segments.QUERY]: {
    limit: Joi.number(),
    offset: Joi.number(),
  },
})

const gameFetchParamValidation = celebrate({
  [Segments.PARAMS]: {
    id: Joi.number().required(),
  },
})

module.exports = {
  gameBodyValidation,
  comBodyValidation,
  gameListQueryValidation,
  gameFetchParamValidation,
}
