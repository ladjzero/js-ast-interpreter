const { run } = require('../common/runner')

it('var assign', () => {
  const global = { console: { log: jest.fn() }}

  run(`
    var a
    a = 'Sam'
    console.log(a)
  `, global)

  expect(global.console.log).toHaveBeenCalledTimes(1)
  expect(global.console.log).toBeCalledWith('Sam')
})

it('object property assign', () => {
  const global = { console: { log: jest.fn() }}

  run(`
    var a
    a = 'Sam'
    console.log(a)
  `, global)

  expect(global.console.log).toHaveBeenCalledTimes(1)
  expect(global.console.log).toBeCalledWith('Sam')
})