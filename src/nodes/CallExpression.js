const Node = require('./Node')
const $Function = require('./$Function')

module.exports = class CallExpression extends Node {
  constructor(node, scope) {
    super(node, scope)
    this.scope = scope
    this.callee = construct(node.callee, scope)
    this.arguments = node.arguments.map(a => construct(a, scope))
  }

  run() {
    const callee = this.callee.run()

    if (typeof callee == 'function') {
      return callee(...this.arguments.map(a => a.run()))
    } else if (callee instanceof $Function){
      return callee.run(...this.arguments.map(a => a.run()))
    } else {
      throw new Error('not callable')
    }
  }
}

var { construct } = require('./utils')

