const Node = require('./Node')

module.exports = class Literal extends Node {
  run() {
    return this.node.value
  }
}