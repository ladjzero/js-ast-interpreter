module.exports = class Identifier {
  constructor(node, scope) {
    this.node = node
    this.scope = scope
  }

  get name() {
    return this.node.name
  }

  run() {
    return this.scope.get(this.node.name)
  }
}