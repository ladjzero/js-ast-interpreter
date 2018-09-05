const { run } = require('../common/runner')

it('for (init, test, update)', () => {
  const global = { console: { log: jest.fn() }}

  run(`
    for (var a = 3; a > 0; a = a - 1) {
      console.log(a);
    }
  `, global)

  expect(global.console.log).toHaveBeenCalledTimes(3)
  expect(global.console.log).toHaveBeenNthCalledWith(1, 3)
  expect(global.console.log).toHaveBeenNthCalledWith(2, 2)
  expect(global.console.log).toHaveBeenNthCalledWith(3, 1)
})

it('for break', () => {
  const global = { console: { log: jest.fn() }}

  run(`
    for (var a = 3; a > 0; a = a - 1) {
      console.log(a);
      if (a == 2) {
        break;
      }
    }
  `, global)

  expect(global.console.log).toHaveBeenCalledTimes(2)
  expect(global.console.log).toHaveBeenNthCalledWith(1, 3)
  expect(global.console.log).toHaveBeenNthCalledWith(2, 2)
})