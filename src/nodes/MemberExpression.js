module.exports = class MemberExpression {
  constructor(node, scope) {
    this.node = node
    this.scope = scope
    this.object = construct(node.object)
    this.property = construct(node.property)
  }

  run() {
    if (this.node.computed) {
      return this.object.run()[this.property.run()](...arguments)
    } else {
      return this.object.run()[this.property.name](...arguments)
    }
  }
}

var { construct } = require('./utils')
