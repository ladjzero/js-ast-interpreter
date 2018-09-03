module.exports = class Identifier {
  constructor(node, scope) {
    this.node = node
    this.scope = scope
  }

  get name() {
    return this.node.name
  }

  run() {
    switch (this.node.name) {
      case 'console':
        return console
      default:
        return this.scope[this.node.name]
    }
  }
}