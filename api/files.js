const request = require('../utils/request')

async function List(path) {
  let data = await request({
    url: '/files',
    params: {
      action: 'GetDir',
      path,
    },
  })
  if (data.data.status === false) {
    return data
  }
  for (let i = 0; i < data.data.DIR.length; i++) {
    data.data.DIR[i] = data.data.DIR[i].split(';')
    data.data.DIR[i].push({
      type: 'folder',
    })
  }
  for (let i = 0; i < data.data.FILES.length; i++) {
    data.data.FILES[i] = data.data.FILES[i].split(';')
    // 读取扩展名
    const ext = data.data.FILES[i][0].split('.')
    data.data.FILES[i].push({
      type: 'file',
      ext: ext[1],
    })
    data.data.DIR.push(data.data.FILES[i])
  }
  delete data.data.FILES
  return data
}

async function GetFile(path) {
  const data = await request({
    params: {
      action: "GetFileBody",
      path
    },
    url: "/files"
  })
  return data
}

async function SaveFile(path) {
  const data = await request({
    params: {
      action: "SaveFileBody",
      path
    },
    url: "/files"
  })
  return data
}

module.exports = {
  List,
  GetFile,
  SaveFile
}
