const { run } = require('../src/common/runner')

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
