const expres = require('express')
const routes = require('./routes')

const app = expres()

app.use(expres.json())
app.use(routes)

app.listen(5000, () => {
  console.log('🚀 Listening on port 5000')
})
