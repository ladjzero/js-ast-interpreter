const { construct } = require('../nodes/utils')

module.exports = function interpretor(ast) {
  if (ast.type == 'Program') {
    construct(ast).run()
  } else {
    throw new Error(`the type of root node of ast must be Program`)
  }
}