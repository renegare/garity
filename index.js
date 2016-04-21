module.exports = function (co, gen) {
  if (arguments.length === 1) {
    return function () {
      return (args => lengthen(co.apply(null, args), args))
        (Array.prototype.slice.call(arguments, 0))
    }
  }

  return (args => (func => lengthen(co.apply(null, args), args))
  (co.apply(null, args)))
  (Array.prototype.slice.call(arguments, 0).filter(i => i !== co))
}

const lengthen = (func, args) => {
  Object.defineProperty(func, 'length', {
    get: function () {
      return args[0].length
    }
  })
  return func
}
