const system = require('./api/system')
const site = require('./api/site')
const files = require('./api/files')

interface exportData {
  system: Function,
  site: Function,
  files: Function
}

const data:exportData = {
  system, site, files
}

module.exports = data