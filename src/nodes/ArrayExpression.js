const Node = require('./Node')

module.exports = class ArrayExpression extends Node {
  constructor(node, scope) {
    super(node, scope)
    this.elements = node.elements.map(e => construct(e, scope))
  }

  run() {
    return this.elements.map(e => e.run())
  }
}

var { construct } = require('./utils')
