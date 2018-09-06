const { run } = require('../common/runner')

it('function declare and run', () => {
  const global = { console: { log: jest.fn() }}

  run(`
    function a() { console.log(1) }
    a();
  `, global)

  expect(global.console.log).toHaveBeenCalledTimes(1)
  expect(global.console.log).toBeCalledWith(1)
})

it('return value', () => {
  const global = { console: { log: jest.fn() }}

  run(`
    function a() { return 1 }
    console.log(a());
  `, global)

  expect(global.console.log).toHaveBeenCalledTimes(1)
  expect(global.console.log).toBeCalledWith(1)
})

it('return should break function', () => {
  const global = { console: { log: jest.fn() }}

  run(`
    function a() {
      return 1;
      console.log(2);
    }
    console.log(a());
  `, global)

  expect(global.console.log).toHaveBeenCalledTimes(1)
  expect(global.console.log).toBeCalledWith(1)
})

it('closure', () => {
  const global = { console: { log: jest.fn() }}

  run(`
    function a() {
      var name = 'Sam';
        return function() {
          return name;
        }
    }
    var b = a();
    console.log(b());
  `, global)

  expect(global.console.log).toHaveBeenCalledTimes(1)
  expect(global.console.log).toBeCalledWith('Sam')
})

it('call self', () => {
  const global = { console: { log: jest.fn() }}

  run(`
    var a = 3;

    function b() {
      if (a) {
        console.log(a);
        a = a - 1;
        b();
      }
    }
    
    b();
  `, global)

  expect(global.console.log).toHaveBeenCalledTimes(3)
  expect(global.console.log).toHaveBeenNthCalledWith(1, 3)
  expect(global.console.log).toHaveBeenNthCalledWith(2, 2)
  expect(global.console.log).toHaveBeenNthCalledWith(3, 1)
})

it('params', () => {
  const global = { console: { log: jest.fn() }}

  run(`
    function a(b, c) {
      console.log(b + c);
    }
    
    a('hello', ' world')
  `, global)

  expect(global.console.log).toHaveBeenCalledTimes(1)
  expect(global.console.log).toBeCalledWith('hello world')
})

it('function apply', () => {
  const global = { console: { log: jest.fn() }}

  run(`
    var a = { name: 'Sam' }

    function say(hi) {
      console.log(hi + ', ' + this.name)
    }
    
    say.apply(a, ['hello'])
  `, global)

  expect(global.console.log).toHaveBeenCalledTimes(1)
  expect(global.console.log).toBeCalledWith('hello, Sam')
})

it('typeof', () => {
  const global = { console: { log: jest.fn() }}

  run(`
    console.log(typeof function(){})
  `, global)

  expect(global.console.log).toHaveBeenCalledTimes(1)
  expect(global.console.log).toBeCalledWith('function')
})

it('function.prototype', () => {
  const global = { console: { log: jest.fn() }}

  run(`
    function A(){}
    console.log(A.prototype.constructor === A)
  `, global)

  expect(global.console.log).toHaveBeenCalledTimes(1)
  expect(global.console.log).toBeCalledWith(true)
})

describe('bind', () => {
  it('bind', () => {
    const global = { console: { log: jest.fn() }}
  
    run(`
      function a(hi) {
        console.log(hi + ', '+ this.name)
      }
      
      var b = { name: 'Sam' }
      var boundA = a.bind(b, 'hello')
      boundA()
      console.log(boundA.prototype)
    `, global)
  
    expect(global.console.log).toHaveBeenCalledTimes(2)
    expect(global.console.log).toHaveBeenNthCalledWith(1, 'hello, Sam')
    expect(global.console.log).toHaveBeenNthCalledWith(2, undefined)
  })

  it('bound function as constructor', () => {
    const global = { console: { log: jest.fn() }}
  
    run(`
      function A() {}
      var boundA = A.bind(null)
      var a = new boundA()
      console.log(a instanceof boundA)
      console.log(a instanceof A)
    `, global)
  
    expect(global.console.log).toHaveBeenCalledTimes(2)
    expect(global.console.log).toHaveBeenNthCalledWith(1, true)
    expect(global.console.log).toHaveBeenNthCalledWith(2, true)
  })
})
