module.exports = class VariableDeclarator {
  constructor(node, scope) {
    this.node = node
    this.scope = scope
    this.scope.set(node.id.name, construct(node.init, scope))
  }

  run() {
    this.scope.set(this.node.id.name, this.scope.getOwn(this.node.id.name).run())
  }
}

var { construct } = require('./utils')
