# cogarity

corouting(generator).length === correct arity

(short for coroutine wrapped generator)

## Usage

```
const cg = require('cogarity')
const co = require('?coroutine?')
const gen = function * (a, b, c, d) { yield d }

if (cg(gen, co).length === gen.length) {
  // always true
}
```

Thats about it ...
