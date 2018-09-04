module.exports = class BlockStatement {
  constructor(node, scope) {
    this.scope = scope
    this.body = node.body.map(n => construct(n, this.scope))
  }

  run() {console.log('block', this.body[0])
    for (let node of this.body) {
      node.run()
    }
  }
}

var { construct } = require('./utils')
