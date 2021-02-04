const express = require('express')
const morgan = require('morgan')
const errors = require('celebrate').errors
const routes = require('./routes')

const app = express()

app.use(express.json())
app.use(morgan('tiny'))

app.use(routes)

app.use(errors())

module.exports = app
