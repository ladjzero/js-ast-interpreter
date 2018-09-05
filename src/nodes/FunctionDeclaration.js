const Node = require('./Node')
const $Function = require('./$Function')

module.exports = class FunctionDeclaration extends Node {
  constructor(node, scope) {
    super(node, scope)
    const $function = new $Function(node, scope)
    scope.setOwn(node.id.name, $function)
  }

  run() {
    
  }
}

var { construct } = require('./utils')
var Scope = require('../common/Scope')
