# native-types [![Build Status](https://travis-ci.org/tjmehta/native-types.svg?branch=master)](https://travis-ci.org/tjmehta/native-types) [![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](http://standardjs.com/)
list of all javascript native types and some utils
supports ES5 and ES6 types, and is cross compatible

## Installation

```
npm install native-types
```

## Usage

### Native types array
All classes native to JavaScript
```js
var nativeTypes = require('native-types')

console.log(nativeTypes)
/*
[
  [Function: Array],
  [Function: ArrayBuffer],
  [Function: Boolean],
  [Function: DataView],
  [Function: Date],
  [Function: Error],
  [Function: EvalError],
  [Function: Float32Array],
  [Function: Float64Array],
  [Function: Function],
  ...more...
*/
```

### Primitive types array
Primitives include strings, booleans, numbers (incl. Inf & NaN), null, undefined
```js
var primitives = require('native-types').primitives

console.log(primitives)
/*
[
  [Function: Boolean],
  [Function: String],
  [Function: Number]
]
*/
```

### isNative
Checks if a value is or instance of a class native to JS
```js
var isNative = require('native-types').isNative
isNative(Array)              // true
isNative(ArrayBuffer)        // true
isNative(Boolean)            // true
isNative(DataView)           // true
isNative(Date)               // true
isNative(Error)              // true
isNative(EvalError)          // true
isNative(Float32Array)       // true
isNative(Float64Array)       // true
isNative(Function)           // true
isNative(new Array())        // true
isNative(new ArrayBuffer())  // true
isNative(new Boolean())      // true
isNative(new DataView())     // true
isNative(new Date())         // true
isNative(new Error())        // true
isNative(new EvalError())    // true
isNative(new Float32Array()) // true
isNative(new Float64Array()) // true
// ...more...
```

### isPrimitive
Checks if a value is a string, boolean, number (Inf, NaN), null, or undefined
```js
var isPrimitive = require('native-types').isPrimitive
isPrimitive(10)               // true
isPrimitive(new Number(10)    // true
isPrimitive('hi')             // true
isPrimitive(new String('hi')) // true
isPrimitive(true)             // true
isPrimitive(new Boolean(true) // true
isPrimitive(null)             // true
isPrimitive(undefined)        // true
isPrimitive(Infinity)         // true
isPrimitive(NaN)              // true
```

## License
MIT
