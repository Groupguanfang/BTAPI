const axios = require("axios")

const request = axios.create({
  baseURL: ""
})

module.exports = request