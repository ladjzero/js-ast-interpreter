const Node = require('./Node')

module.exports = class NewExpression extends Node {
  constructor(node, scope) {
    super(node, scope)
    this.callee = construct(node.callee, scope)
    this.arguments = node.arguments.map(a => construct(a, scope))
  }

  run(context) {
    const obj  = {}
    const callee = this.callee.run()

    const ret = callee.apply(obj, this.arguments.map(a => a.run(context)))
    
    if (typeof ret == 'object') {
      return ret
    } else {
      return obj
    }
  }
}

var { construct } = require('./utils')
