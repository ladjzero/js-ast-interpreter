const { run } = require('../common/runner')

it('new operator', () => {
  const global = { console: { log: jest.fn() }}

  run(`
    function A() {
      this.name = 'Sam'
      this.say = function() { console.log(this.name) }
    }
    
    var a = new A()
    
    a.say()
  `, global)

  expect(global.console.log).toHaveBeenCalledTimes(1)
  expect(global.console.log).toBeCalledWith('Sam')
})

it('prototype', () => {
  const global = { console: { log: jest.fn() }}

  run(`
    function A() {}
    A.prototype = { name: 'Sam' }
    var a = new A()
    console.log(a.name)
  `, global)

  expect(global.console.log).toHaveBeenCalledTimes(1)
  expect(global.console.log).toBeCalledWith('Sam')
})