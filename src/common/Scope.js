module.exports = class Scope {
  constructor(upper, dict) {
    this.dict = dict || Object.create(null)
    this.upper = upper
  }

  has(key) {
    return key in this.dict
  }

  getOwn(key) {
    return this.dict[key]
  }

  get(key) {
    let current = this

    while (current) {
      if (current.has(key)) {
        return current.getOwn(key)
      } else {
        current = current.upper
      }
    }
  }

  set(key, val) {
    this.dict[key] = val
  }
}