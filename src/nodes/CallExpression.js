const Node = require('./Node')
const $Function = require('./$Function')

module.exports = class CallExpression extends Node {
  constructor(node, scope) {
    super(node, scope)
    this.scope = scope
    this.callee = construct(node.callee, scope)
    this.arguments = node.arguments.map(a => construct(a, scope))
  }

  run(context) {
    this.$this = undefined

    if (this.callee.type == 'MemberExpression') {
      this.$this = this.callee.object.run()
    }

    const callee = this.callee.run()

    if (typeof callee == 'function' || callee instanceof $Function) {
      return callee.apply(this.$this, this.arguments.map(a => a.run(context)))
    } else {
      throw new Error('not callable')
    }
  }
}

var { construct } = require('./utils')

