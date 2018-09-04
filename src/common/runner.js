const acorn = require('acorn')
const interpretor = require('./interpretor')

exports.run = function run(code, global) {
  return interpretor(acorn.parse(code), global)
}
