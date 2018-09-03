module.exports = class CallExpression {
  constructor(node, scope) {
    this.node = node
    this.scope = scope
    this.callee = construct(node.callee, scope)
    this.arguments = node.arguments.map(a => construct(a, scope))
  }

  run() {
    this.callee.run(...this.arguments.map(a => a.run()))
  }
}

var { construct } = require('./utils')

