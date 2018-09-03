module.exports = class Literal {
  constructor(node) {
    this.node = node
  }

  run() {
    return this.node.value
  }
}