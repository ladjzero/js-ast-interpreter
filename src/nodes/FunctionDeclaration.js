module.exports = class FunctionDeclaration {
  constructor(node, scope) {
    this.node = node
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
