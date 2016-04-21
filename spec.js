const test = require('ava')
const expect = require('chai').expect
const cg = require('.')
const stub = require('sinon').stub

test('arity of the returned func', () => {
  const gen = function * (a, b, c) {}
  let co = stub().returns(function () {})
  expect(gen.length).to.eql(3)
  expect(co(gen).length).to.eql(0)
  co = stub().returns(function () {})
  expect(cg(co, gen).length).to.equal(gen.length)
})

test('extra args', () => {
  const gen = function * (a, b) {}
  const co = stub().returns(function () {})
  const func = cg(co, gen, 1, 2, 3, 4)
  expect(co.firstCall.args).to.eql([gen, 1, 2, 3, 4])
  expect(gen.length).to.eql(2)
})

test('wrap interface', () => {
  const gen = function * (a, b) {}
  const co = stub().returns(function () {})
  const co2 = cg(co)
  const func = co2(gen, 1, 2, 3, 4)
  expect(co.firstCall.args).to.eql([gen, 1, 2, 3, 4])
  expect(gen.length).to.eql(func.length)
})
