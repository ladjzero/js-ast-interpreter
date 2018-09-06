const { run } = require('../common/runner')

it('auto box', () => {
  const global = { console: { log: jest.fn() }}

  run(`
    console.log((10).toString(2))
  `, global)

  expect(global.console.log).toHaveBeenCalledTimes(1)
  expect(global.console.log).toBeCalledWith('1010')
})