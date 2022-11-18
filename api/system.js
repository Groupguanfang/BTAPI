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

async function Update(params) {
  return await request({
    url: "/ajax?action=UpdatePanel",
    params
  })
}



module.exports = {
  Total,
  Disk,
  Status,
  Update
}
