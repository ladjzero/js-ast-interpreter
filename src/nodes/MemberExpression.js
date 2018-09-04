module.exports = class MemberExpression {
  constructor(node, scope) {
    this.node = node
    this.scope = scope
    this.object = construct(node.object, scope)
    this.property = construct(node.property, scope)
  }

  run() {
    const obj  = this.object.run();

    if (this.node.computed) {
      return obj[this.property.run()]
    } else {
      return obj[this.property.name]
    }
  }
}

var { construct } = require('./utils')
