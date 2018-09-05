const Node = require('./Node')

module.exports = class BlockStatement extends Node {
  constructor(node, scope) {
    super(node, scope)
    this.scope = scope
    this.body = node.body.map(n => construct(n, this.scope))
  }

  run() {
    for (let node of this.body) {
      if (node.type == 'ReturnStatement') {
        return node.run()
      }

      node.run()
    }
  }
}

var { construct } = require('./utils')
