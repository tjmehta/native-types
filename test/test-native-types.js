var Code = require('code')
var Lab = require('lab')
var util = require('util')

var nativeTypes = require('../index.js')

var lab = exports.lab = Lab.script()
var describe = lab.describe
var it = lab.it
var expect = Code.expect

var primitives = nativeTypes.primitives
var isNative = nativeTypes.isNative
var isPrimitive = nativeTypes.isPrimitive
function Animal () {
  this.alive = true
}
Animal.prototype.die = function () {
  this.alive = false
}
function Mammal (locomotion) {
  this.hasHair = true
  this.liveBirth = true
  this.locomotion = locomotion
}
util.inherits(Mammal, Animal)
Mammal.prototype.canSwim = function () {
  return this.locomotion === 'swim'
}
function Cat () {
  Mammal.call(this, 'walk')
}
util.inherits(Cat, Mammal)

describe('native-types', function () {
  it('should export an array of all native types', function (done) {
    // optimally this would check diff global types for diff environments
    expect(nativeTypes.length).to.not.equal(0)
    expect(nativeTypes).to.contain([
      Array,
      Object,
      RegExp,
      Date,
      Function,
      Number,
      Boolean
    // alot more.. check out index
    ])
    done()
  })
  it('should export an array of all primitive types', function (done) {
    expect(primitives).to.deep.equal([ Boolean, String, Number ])
    done()
  })

  describe('isNative', function () {
    it('should return true for natives', function (done) {
      /* eslint-disable */
      expect(isNative(10)).to.be.true()
      expect(isNative(new Number(10))).to.be.true()
      expect(isNative('hi')).to.be.true()
      expect(isNative(new String('hi'))).to.be.true()
      expect(isNative(true)).to.be.true()
      expect(isNative(new Boolean(true))).to.be.true()
      nativeTypes.forEach(function (type) {
        expect(isNative(type), 'isNative(' + type + ') === true').to.be.true()
      })
      /* eslint-enable */
      done()
    })

    it('should return false for non-natives', function (done) {
      expect(isNative(new Animal())).to.be.false()
      expect(isNative(new Mammal())).to.be.false()
      expect(isNative(new Cat())).to.be.false()
      done()
    })
  })
  describe('isPrimitive', function () {
    it('should return true for primitives', function (done) {
      /* eslint-disable */
      expect(isPrimitive(10)).to.be.true()
      expect(isPrimitive(new Number(10))).to.be.true()
      expect(isPrimitive('hi')).to.be.true()
      expect(isPrimitive(new String('hi'))).to.be.true()
      expect(isPrimitive(true)).to.be.true()
      expect(isPrimitive(new Boolean(true))).to.be.true()
      expect(isPrimitive(null)).to.be.true()
      expect(isPrimitive(undefined)).to.be.true()
      expect(isPrimitive(Infinity)).to.be.true()
      expect(isPrimitive(NaN)).to.be.true()
      /* eslint-enable */
      done()
    })

    it('should return false for non-primitives', function (done) {
      var nonPrimitives = nativeTypes.filter(function (val) {
        return !~primitives.indexOf(val)
      })
      nonPrimitives.forEach(function (type) {
        expect(isPrimitive(type), 'isPrimitive(' + type + ') ===  false').to.be.false()
      })
      done()
    })
  })
})
