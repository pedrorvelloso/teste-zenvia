require('dotenv/config')

const app = require('./app')

// Define porta da aplicação
const PORT = process.env.PORT || 5000

// Dísponibiliza servidor HTTP
app.listen(PORT, () => {
  console.log(`🚀 Listening on port ${PORT}`)
})
