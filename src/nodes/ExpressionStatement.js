const Node = require('./Node')

module.exports = class ExpressionStatement extends Node {
  constructor(node, scope) {
    super(node, scope)
    this.expression = construct(node.expression, scope)
  }

  run(context) {
    this.expression.run(context)
  }
}

var { construct } = require('./utils')
