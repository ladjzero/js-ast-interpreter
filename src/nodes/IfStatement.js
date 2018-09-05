const Node = require('./Node')

module.exports = class IfStatement extends Node {
  constructor(node, scope) {
    super(node, scope)
    this.test = construct(node.test, scope)
    this.consequent = construct(node.consequent, scope)
    this.alternate = construct(node.alternate, scope)
  }

  run() {
    if (this.test.run()) {
      this.consequent.run()
    } else {
      this.alternate.run()
    }
  }
}

var { construct } = require('./utils')
