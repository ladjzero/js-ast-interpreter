const Node = require('./Node')

module.exports = class ExpressionStatement extends Node {
  constructor(node, scope) {
    super(node, scope)
    this.expression = construct(node.expression, scope)
  }

  run() {
    this.expression.run()
  }
}

var { construct } = require('./utils')
