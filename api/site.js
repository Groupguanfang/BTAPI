const request = require('../utils/request')

function List() {
  return request({
    url: '/data?action=getData&table=sites',
  })
}

module.exports = {
  List,
}
