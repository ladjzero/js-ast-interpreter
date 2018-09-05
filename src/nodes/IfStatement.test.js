const { run } = require('../common/runner')

it('if else', () => {
  const global = { console: { log: jest.fn() }}

  run(`
    var on = true;

    if (on) {
      console.log('on');
    } else {
      console.log('off');
    }
  `, global)

  expect(global.console.log).toHaveBeenCalledTimes(1)
  expect(global.console.log).toBeCalledWith('on')
})

it('if elseif else', () => {
  const global = { console: { log: jest.fn() }}

  run(`
    var on = false;
    var hot = false;

    if (on) {
      console.log('on');
    } else if (hot) {
      console.log('hot');
    } else {
      console.log('off cool');
    }
  `, global)

  expect(global.console.log).toHaveBeenCalledTimes(1)
  expect(global.console.log).toBeCalledWith('off cool')
})