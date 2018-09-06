module.exports = class $Function {
  constructor(node, scope) {
    // un-bind case.
    if (node && scope) {
      this.node = node
      this.scope = new Scope(scope)
      this.body = construct(node.body, this.scope)
      
      if (node.type == 'FunctionDeclaration') {
        this.scope.setOwn(node.id.name, this)
      }
  
      this.prototype = { constructor: this }
    }
  }

  apply($this, $arguments) {
    if (this.__boundTarget) {
      return this.__boundTarget.apply(this.__boundThis, [...this.__boundArgs, ...$arguments])
    } else {
      for (let i = 0, len = $arguments.length; i < len; i++) {
        this.scope.setOwn(this.node.params[i].name, $arguments[i])
      }
  
      return this.body.run({ $this })
    }
  }

  bind($this) {
    const args = Array.from(arguments).slice(1)
    const bfn = new $Function()
    bfn.__boundThis = $this
    bfn.__boundArgs = args
    bfn.__boundTarget = this
    return bfn
  }
}

var { construct } = require('./utils')
var Scope = require('../common/Scope')
