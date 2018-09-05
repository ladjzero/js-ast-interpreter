const Node = require('./Node')

module.exports = class ThisExpression extends Node {
  run(context) {
    return context.$this
  }
}
