module.exports = function (gen, co) {
  return ((length) => ((func) => {
    Object.defineProperty(func, 'length', {
      get: function () {
        return length
      }
    })
    return func
  })(co(gen)))(gen.length)
}
