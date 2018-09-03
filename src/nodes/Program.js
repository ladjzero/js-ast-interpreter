module.exports = class Program {
  constructor(node) {
    this.scope = {}
    this.body = node.body.map(n => construct(n, this.scope))
  }

  run() {
    for (let node of this.body) {
      node.run()
    }
  }
}

var { construct } = require('./utils')
