module.exports = class Node {
  constructor(node) {
    this.node = node
    this.type = node.type
  }

  __isNode__() {
    return true
  }
}
