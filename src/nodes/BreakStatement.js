const Node = require('./Node')

module.exports = class BreakStatement extends Node {
  run(context) {
    if (context && context.loop) {
      context.loop.break = true
    }
  }
}