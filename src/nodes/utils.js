exports.construct = function construct(node, ...args) {
  if (typeof nodes[node.type] !== 'function') {
    throw new Error(`node type ${node.type} is not implemented yet`)
  }

  return Reflect.construct(nodes[node.type], [node, ...args])
}

var nodes = require('./')
