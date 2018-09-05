const Node = require('./Node')

module.exports = class BinaryExpression extends Node {
  constructor(node, scope) {
    super(node, scope)
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