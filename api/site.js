const request = require('../utils/request')

async function List() {
  return await request({
    url: '/data?action=getData&table=sites',
  })
}

module.exports = {
  List,
}
