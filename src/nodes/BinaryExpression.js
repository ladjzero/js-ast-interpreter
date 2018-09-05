const Node = require('./Node')

module.exports = class BinaryExpression extends Node {
  constructor(node, scope) {
    super(node, scope)
    this.left = construct(node.left, scope)
    this.right = construct(node.right, scope)
  }

  run(context) {
    const left = this.left.run(context)
    const right = this.right.run(context)

    switch (this.node.operator) {
    case '+':
      return left + right
    case '-':
      return left - right
    case '>':
      return left > right
    case '==':
      return left == right
    case '===':
      return left === right
    }
  }
}

var { construct } = require('./utils')