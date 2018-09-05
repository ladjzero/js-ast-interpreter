const Node = require('./Node')

module.exports = class FunctionDeclaration extends Node {
  constructor(node, scope) {
    super(node, scope)
    this.scope = new Scope(scope)
    this.body = construct(node.body, this.scope)
    this.scope.setOwn(node.id.name, this.body)
  }

  run() {
    this.scope.upper.setOwn(this.node.id.name, this.body)
  }
}

var { construct } = require('./utils')
var Scope = require('../common/Scope')
