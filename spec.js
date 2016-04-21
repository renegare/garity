const test = require('ava')
const expect = require('chai').expect
const co = require('bluebird').coroutine
const cg = require('.')

test('arity of the returned func', () => {
  const gen = function * (a) {}
  expect(cg(gen, co).length).to.equal(gen.length)
})
