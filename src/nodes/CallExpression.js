module.exports = class CallExpression {
  constructor(node, scope) {
    this.node = node
    this.scope = scope
    this.callee = construct(node.callee, scope)
    this.arguments = node.arguments.map(a => construct(a, scope))
  }

  run() {
    const callee = this.callee.run()

    if (typeof callee == 'function') {
      callee(...this.arguments.map(a => a.run()))
    } else {
      callee.run(...this.arguments.map(a => a.run()))
    }
  }
}

var { construct } = require('./utils')

