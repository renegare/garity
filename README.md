# garity

coroutine(generator).length === generator.length

(short for coroutine wrapped generator)

## :badges [![Build Status](https://travis-ci.org/renegare/garity.svg?branch=master)](https://travis-ci.org/renegare/garity) [![npm version](https://badge.fury.io/js/garity.svg)](https://badge.fury.io/js/garity)

## :installation

```
$ npm i -S garity
```

## :usage

```
const ga = require('garity')
const co = require('bluebird').coroutine
const gen = function * (a, b, c, d) { yield d }

if (ga(co, gen).length === 4) {
  console.log('#1 Hey; as expected')
}

// => #1 Hey; as expected

const cg = ga(co)
if (cg(gen).length === 4) {
  console.log('#2 Hey; as expected')
}

// => #2 Hey; as expected
```

Thats about it ...
