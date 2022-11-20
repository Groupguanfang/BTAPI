const express = require('express')
const app = express()
const port = 3090


app.use('*',require('./middleware/checker'))
app.use('/system', require('./src/system'))
app.use('/site', require('./src/site'))
app.use('/files', require('./src/files'))

app.listen(port, () => {
  console.log(`BT app listening on port ${port}`)
})
