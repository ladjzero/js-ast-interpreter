const { construct } = require('../nodes/utils')
const Scope = require('./Scope')

module.exports = function interpretor(ast, global) {
  if (ast.type == 'Program') {
    construct(ast, new Scope(null, global)).run()
  } else {
    throw new Error(`the type of root node of ast must be Program`)
  }
}