const { run } = require('./src/common/runner')


run(`
  function a() { console.log(1) }
  a();
`, global)