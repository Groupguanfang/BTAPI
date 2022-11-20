const axios = require('axios').default
const md5 = require('md5-node')

const request = axios.create({
  baseURL: "http://101.33.221.245:8888",
  params: {
    request_time: new Date().getTime(),
    request_token: md5(new Date().getTime() + md5('899loiW5aLbLIRmWEqQZAw9RDK1c782W')),
  },
  method: 'post',
})

module.exports = request
