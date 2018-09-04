const Node = require('./Node')

module.exports = class Literal extends Node {
  constructor(node) {
    super(node)
    this.node = node
  }

  run() {
    return this.node.value
  }
}