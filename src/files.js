const express = require('express')
const router = express.Router()
const files = require('../api/files')

router.get('/list', async (req, res) => {
  const data = await files.List(req.query.path)
  res.send(data.data)
})

module.exports = router
