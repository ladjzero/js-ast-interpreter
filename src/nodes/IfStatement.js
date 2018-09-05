const Node = require('./Node')

module.exports = class IfStatement extends Node {
  constructor(node, scope) {
    super(node, scope)
    this.test = construct(node.test, scope)
    this.consequent = construct(node.consequent, scope)
    this.alternate = node.alternate && construct(node.alternate, scope)
  }

  run(context) {
    if (this.test.run()) {
      this.consequent.run(context)
    } else {
      this.alternate && this.alternate.run()
    }
  }
}

var { construct } = require('./utils')
