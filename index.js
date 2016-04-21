module.exports = function (gen, co) {
  return ((args) => ((func) => {
    Object.defineProperty(func, 'length', {
      get: function () {
        return gen.length
      }
    })
    return func
  })(co.apply(null, args)))
  (Array.prototype.slice.call(arguments, 0).filter(i => i !== co))
}
