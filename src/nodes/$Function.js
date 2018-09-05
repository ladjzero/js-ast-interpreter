module.exports = class $Function {
  constructor(node, scope) {
    this.node = node
    this.scope = new Scope(scope)
    this.body = construct(node.body, this.scope)
    
    if (node.type == 'FunctionDeclaration') {
      this.scope.setOwn(node.id.name, this)
    }
  }

  apply($this, $arguments) {
    this.run({ $this, $arguments })
  }

  run({ $this, $arguments }) {
    for (let i = 0, len = $arguments.length; i < len; i++) {
      this.scope.setOwn(this.node.params[i].name, $arguments[i])
    }

    return this.body.run({ $this })
  }
}

var { construct } = require('./utils')
var Scope = require('../common/Scope')
