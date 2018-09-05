const Node = require('./Node')

module.exports = class ObjectExpression extends Node {
  constructor(node, scope) {
    super(node, scope)
    this.scope = scope
  }

  run() {
    const obj = {}

    for (let p of this.node.properties) {
      obj[p.key.name] = construct(p.value, this.scope).run()
    }

    return obj
  }
}

var { construct } = require('./utils')
