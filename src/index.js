const express = require('express')
const morgan = require('morgan')
const errors = require('celebrate').errors
const routes = require('./routes')

const app = express()

app.use(express.json())
app.use(morgan('tiny'))
app.use(errors())

app.use(routes)

app.listen(5000, () => {
  console.log('🚀 Listening on port 5000')
})
