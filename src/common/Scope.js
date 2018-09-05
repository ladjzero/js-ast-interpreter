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

  setOwn(key, val) {
    this.dict[key] = val
  }

  set(key, val) {
    let current = this

    while (current) {
      if (current.has(key)) {
        current.setOwn(key, val)
        break
      } else {
        current = current.upper
      }
    }
  }
}