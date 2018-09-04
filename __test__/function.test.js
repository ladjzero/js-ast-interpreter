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