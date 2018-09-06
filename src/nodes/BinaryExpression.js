const Node = require('./Node')
const $Function = require('./$Function')

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
    case 'instanceof': {
      if (right instanceof $Function) {
        const proto = right.__boundTarget ? right.__boundTarget.prototype : right.prototype

        if (proto) {
          return proto.isPrototypeOf(left)
        }
  
        return false
      } else {
        return left instanceof right
      }
    }}
  }
}

var { construct } = require('./utils')