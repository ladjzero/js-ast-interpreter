module.exports = class BinaryExpression {
  constructor(node, scope) {
    this.node = node
    this.scope = scope
    this.left = construct(node.left, scope)
    this.right = construct(node.right, scope)
  }

  run() {
    switch (this.node.operator) {
      case '+':
      return this.left.run() + this.right.run()
    }
  }
}

var { construct } = require('./utils')