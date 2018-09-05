const { run } = require('../src/common/runner')

describe('function creates a new scope', () => {
  it('overwrite', () => {
    const global = { console: { log: jest.fn() }}

    run(`
      var name = 'Sam';
      function a() {
        var name = 'Wels';
        console.log(name);
      }
      a();
    `, global)
  
    expect(global.console.log).toHaveBeenCalledTimes(1)
    expect(global.console.log).toBeCalledWith('Wels')
  })

  it('var hoisted', () => {
    const global = { console: { log: jest.fn() }}

    run(`
      var name = 'Sam';
      function a() {
        console.log(name);
        var name = 'Wels';
        console.log(name);
      }
      a();
    `, global)
  
    expect(global.console.log).toHaveBeenCalledTimes(2)
    expect(global.console.log).toHaveBeenNthCalledWith(1, undefined)
    expect(global.console.log).toHaveBeenNthCalledWith(2, 'Wels')
  })
})