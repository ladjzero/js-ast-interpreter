const Node = require('./Node')
const $Function = require('./$Function')

module.exports = class FunctionExpression extends Node {
  constructor(node, scope) {
    super(node, scope)
    this.$function = new $Function(node, scope)
  }

  run() {
    return this.$function
  }
}

var { construct } = require('./utils')
