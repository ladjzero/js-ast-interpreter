const Node = require('./Node')

module.exports = class ReturnStatement extends Node {
  constructor(node, scope) {
    super(node, scope)
    this.scope = scope
    this.argument = construct(node.argument, scope)
  }

  run() {
    return this.argument.run()
  }
}

var { construct } = require('./utils')
