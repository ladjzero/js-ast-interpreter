const Node = require('./Node')

module.exports = class AssignmentExpression extends Node {
  constructor(node, scope) {
    super(node, scope)
    this.scope = scope
    this.left = construct(node.left, scope)
    this.right = construct(node.right, scope)
  }

  run() {
    this.scope.set(this.node.left.name, this.right.run())
  }
}

var { construct } = require('./utils')
