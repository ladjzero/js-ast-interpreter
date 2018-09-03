module.exports = class ExpressionStatement {
  constructor(node, scope) {
    this.node = node
    this.expression = construct(node.expression, scope)
  }

  run() {
    this.expression.run()
  }
}

var { construct } = require('./utils')
