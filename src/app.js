const express = require('express')
const morgan = require('morgan')
const errors = require('celebrate').errors
const routes = require('./routes')

const app = express()

app.use(express.json())
app.use(morgan('tiny', { skip: (req, res) => process.env.NODE_ENV === 'test' }))

app.use(routes)

app.use(errors())

module.exports = app
