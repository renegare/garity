# garity

corouting(generator).length === correct arity

(short for coroutine wrapped generator)

## :badges [![Build Status](https://travis-ci.org/renegare/garity.svg?branch=master)](https://travis-ci.org/renegare/garity) [![npm version](https://badge.fury.io/js/garity.svg)](https://badge.fury.io/js/garity)

## :installation

```
$ npm i -S garity
```

## :usage

```
const cg = require('cogarity')
const co = require('?coroutine?')
const gen = function * (a, b, c, d) { yield d }

if (cg(gen, co).length === gen.length) {
  // always true
}
```

Thats about it ...
