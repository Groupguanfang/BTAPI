const express = require("express")
const router = express.Router()
const site = require("../api/site")

router.get('/list',async (req,res) => {
  const data = await site.List()
  res.send(data.data)
})

module.exports = router