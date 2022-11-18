const express = require('express')
const router = express.Router()
const system = require('../api/system')

router.get('/total', async (req, res) => {
  const data = await system.Total()
  res.send(data.data)
})

router.get('/disk', async (req, res) => {
  const data = await system.Disk()
  res.send(data.data)
})

router.get('/status', async (req, res) => {
  const data = await system.Status()
  res.send(data.data)
})

router.get('/update', async (req, res) => {
  const data = await system.Update(req.query)
  res.send(data.data)
})

module.exports = router
