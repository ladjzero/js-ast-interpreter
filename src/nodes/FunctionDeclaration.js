const Node = require('./Node')

module.exports = class FunctionDeclaration extends Node {
  constructor(node, scope) {
    super(node, scope)
    this.scope = new Scope(scope)
    this.body = construct(node.body, this.scope)
  }

  run() {
    this.scope.upper.set(this.node.id.name, this.body)
  }

  call() {
    this.body.run()
  }
}

var { construct } = require('./utils')
var Scope = require('../common/Scope')
