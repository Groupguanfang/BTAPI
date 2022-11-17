const request = require("../utils/request")

async function Total() {
  return await request({
    url: "/system?action=GetSystemTotal",
  })
}

async function Disk() {
  return await request({
    url: "/system?action=GetDiskInfo",
  })
}

async function Status() {
  return await request({
    url: "/system?action=GetNetWork"
  })
}

module.exports = {
  Total,
  Disk,
  Status
}
