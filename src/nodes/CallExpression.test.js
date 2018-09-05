const { run } = require('../common/runner')

describe('this', () => {
  it('member call', () => {
    const global = { console: { log: jest.fn() }}

    run(`
      var a = {
        name: 'Sam',
        say: function() {
          console.log(this.name)
        }
      }
      a.say()
    `, global)
  
    expect(global.console.log).toHaveBeenCalledTimes(1)
    expect(global.console.log).toBeCalledWith('Sam')
  })
})
