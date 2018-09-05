const Node = require('./Node')

module.exports = class Identifier extends Node {
  constructor(node, scope) {
    super(node, scope)
    this.scope = scope
  }

  get name() {
    return this.node.name
  }

  run() {
    return this.scope.get(this.node.name)
  }
}