const axios = require("axios").default
const md5 = require("md5")
require("dotenv").config()

const request = axios.create({
  baseURL: process.env.HOST,
  params: {
    request_time: new Date().getTime(),
    request_token: md5(new Date().getTime() + md5(process.env.SECRET))
  }
})

module.exports = request