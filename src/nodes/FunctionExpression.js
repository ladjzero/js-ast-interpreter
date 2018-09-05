const Node = require('./Node')

module.exports = class FunctionExpression extends Node {
  constructor(node, scope) {
    super(node, scope)
    this.scope = new Scope(scope)
    this.body = construct(node.body, this.scope)
  }

  run() {
    return this.body
  }
}

var { construct } = require('./utils')
var Scope = require('../common/Scope')
