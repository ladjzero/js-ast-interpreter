const Node = require('./Node')

module.exports = class ForStatement extends Node {
  constructor(node, scope) {
    super(node, scope)
    this.init = construct(node.init, scope)
    this.test = construct(node.test, scope)
    this.update = construct(node.update, scope)
    this.body = construct(node.body, scope)
  }

  run() {
    this.init.run()

    while(this.test.run()) {
      this.body.run({ loop: this })

      if (this.break) break

      this.update.run()
    }
  }
}

var { construct } = require('./utils')
