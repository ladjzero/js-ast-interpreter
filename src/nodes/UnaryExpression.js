const Node = require('./Node')
const $Function = require('./$Function')

module.exports = class UnaryExpression extends Node {
  constructor(node, scope) {
    super(node, scope)
    this.argument = construct(node.argument, scope)
  }

  run(context) {
    const argument = this.argument.run()

    switch (this.node.operator) {
    case 'typeof':
      return argument instanceof $Function ? 'function' : typeof argument
    }
  }
}

var { construct } = require('./utils')
