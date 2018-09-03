const acorn = require('acorn')
const interpretor = require('./interpretor')

exports.run = function run(code) {
  return interpretor(acorn.parse(code))
}
