var directInstanceOf = require('direct-instance-of')
var exists = require('101/exists')
var isFunction = require('101/is-function')
var ctx = getGlobal()
function getGlobal () {
  /* $lab:coverage:off$ */
  if (typeof window !== 'undefined') {
    return window
  }
  if (typeof global !== 'undefined') {
    return global
  }
/* $lab:coverage:on$ */
}

// source https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects
var natives = module.exports = [
  ctx.Array,
  ctx.ArrayBuffer,
  ctx.Boolean,
  ctx.DataView,
  ctx.Date,
  ctx.Error,
  ctx.EvalError,
  ctx.Float32Array,
  ctx.Float64Array,
  ctx.Function,
  ctx.Generator,
  ctx.GeneratorFunction,
  ctx.Infinity,
  ctx.Int16Array,
  ctx.Int32Array,
  ctx.Int8Array,
  ctx.InternalError,
  ctx.Intl,
  // ctx.Intl && ctx.Intl.Collator, // Not Types
  // ctx.Intl && ctx.Intl.DateTimeFormat,
  // ctx.Intl && ctx.Intl.NumberFormat,
  ctx.Iterator,
  ctx.JSON,
  ctx.Map,
  ctx.Math,
  ctx.NaN,
  ctx.Number,
  ctx.Object,
  ctx.ParallelArray,
  ctx.Promise,
  ctx.Proxy,
  ctx.RangeError,
  ctx.ReferenceError,
  ctx.Reflect,
  ctx.RegExp,
  ctx.SIMD,
  /* $lab:coverage:off$ */
  ctx.SIMD && ctx.SIMD.Float32x4,
  ctx.SIMD && ctx.SIMD.Float64x2,
  ctx.SIMD && ctx.SIMD.Int16x8,
  ctx.SIMD && ctx.SIMD.Int32x4,
  ctx.SIMD && ctx.SIMD.Int8x16,
  /* $lab:coverage:on$ */
  ctx.Set,
  ctx.StopIteration,
  ctx.String,
  ctx.Symbol,
  ctx.SyntaxError,
  ctx.TypeError,
  ctx.TypedArray,
  ctx.URIError,
  ctx.Uint16Array,
  ctx.Uint32Array,
  ctx.Uint8Array,
  ctx.Uint8ClampedArray,
  ctx.WeakMap,
  ctx.WeakSet
// undefined
// null
// NaN
].filter(isFunction).filter(exists)

var primitives = module.exports.primitives = [
  ctx.Boolean,
  ctx.String,
  ctx.Number
// undefined
// null
// NaN
].filter(isFunction).filter(exists)

module.exports.isNative = isNative

module.exports.isPrimitive = isPrimitive

/**
 * returns if a value is an instance of native type
 * @param  ctx.{*}  ctx.val  ctx.value to check if is native
 * @return {Boolean}  ctx.true if val is native, else false
 */
function isNative (val) {
  if (isPrimitive(val)) {
    return true
  }
  return natives.some(function (Class) {
    return val === Class || directInstanceOf(val, Class)
  })
}

/**
 * returns if a value is an instance of a primitive type
 * @param  {*}  thing  value to check if is primitive
 * @return {Boolean}   true if val is primitive, else false
 */
function isPrimitive (val) {
  if (val === null || val === undefined || val === Infinity || isLiterallyNaN(val)) {
    return true
  }
  return primitives.some(function (Class) {
    return val === Class || directInstanceOf(val, Class)
  })
}

function isLiterallyNaN (val) {
  return typeof val === 'number' && isNaN(val)
}
