const Node = require('./Node')

module.exports = class AssignmentExpression extends Node {
  constructor(node, scope) {
    super(node, scope)
    this.scope = scope
    this.left = construct(node.left, scope)
    this.right = construct(node.right, scope)
  }

  run(context) {
    if (this.node.left.type == 'MemberExpression') {
      const obj = construct(this.node.left.object, this.scope).run(context)
      return obj[this.node.left.property.name] = this.right.run(context)
    } else {
      return this.scope.set(this.node.left.name, this.right.run(context))
    }
  }
}

var { construct } = require('./utils')
