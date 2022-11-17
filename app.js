const express = require('express')
const app = express()
require('dotenv').config()
const port = 3090

app.use('/system', require('./src/system'))

app.listen(port, () => {
  console.log(`BT app listening on port ${port}`)
})
