const express = require('express')
var cors = require('cors')

const app = express()
app.use(cors())

const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/health', (req, res) => {
    res.send('I am ok!!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})