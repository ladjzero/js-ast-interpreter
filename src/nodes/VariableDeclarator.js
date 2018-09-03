module.exports = class VariableDeclarator {
  constructor(node, scope) {
    this.node = node
    this.scope = scope
    this.scope[node.id.name] = construct(node.init, scope)
  }

  run() {
    this.scope[this.node.id.name] = this.scope[this.node.id.name].run()
  }
}

var { construct } = require('./utils')
