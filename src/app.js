const express = require('express')
const morgan = require('morgan')
const errors = require('celebrate').errors
const routes = require('./routes')

const app = express()

// Aplica middleware para servidor escutar requisições com content-type JSON
app.use(express.json())
// Aplica middleware para log de requisição
app.use(morgan('tiny', { skip: (req, res) => process.env.NODE_ENV === 'test' }))

// Registra rotas da aplicação
app.use(routes)

// Registra middleware de erros do `celebrate`
app.use(errors())

// Middleware para lidar com algum erro proveninente de algum erro de servidor
app.use((error, request, response, next) => {
  return response.status(500).json({
    error: 'Internal Server Error',
    message: error.message,
  })
})

module.exports = app
