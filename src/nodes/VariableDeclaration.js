const Node = require('./Node')

module.exports = class VariableDeclaration extends Node {
  constructor(node, scope) {
    super(node, scope)
    this.node = node
    this.scope = scope
    this.declarations = node.declarations.map(n => construct(n, scope))
  }

  run() {
    for (let d of this.declarations) {
      d.run();
    }
  }
}

var { construct } = require('./utils')