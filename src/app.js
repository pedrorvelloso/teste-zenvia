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

module.exports = app
