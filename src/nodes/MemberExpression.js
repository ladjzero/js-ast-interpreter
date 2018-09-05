const Node = require('./Node')

module.exports = class MemberExpression extends Node {
  constructor(node, scope) {
    super(node, scope)
    this.scope = scope
    this.object = construct(node.object, scope)
    this.property = construct(node.property, scope)
  }

  run(context) {
    const obj  = this.object.run(context);

    if (this.node.computed) {
      return obj[this.property.run()]
    } else {
      return obj[this.property.name]
    }
  }
}

var { construct } = require('./utils')
