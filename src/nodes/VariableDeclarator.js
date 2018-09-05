const Node = require('./Node')

module.exports = class VariableDeclarator extends Node {
  constructor(node, scope) {
    super(node, scope)
    this.scope = scope
    this.scope.set(node.id.name, undefined)
    this.__initScope = construct(node.init, scope)
  }

  run() {
    this.scope.set(this.node.id.name, this.__initScope.run())
  }
}

var { construct } = require('./utils')
