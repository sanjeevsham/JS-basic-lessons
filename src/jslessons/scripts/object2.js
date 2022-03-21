/* eslint-disable no-array-constructor */
/* eslint-disable no-new-func */
/* eslint-disable prefer-regex-literals */
/* eslint-disable no-control-regex */
/* eslint-disable no-var */
/* eslint-disable no-new-wrappers */
/* eslint-disable no-new-object */
/* eslint-disable no-unused-vars */
var cody = new Object()
cody.living = true
cody.age = 33
cody.gender = 'male'
cody.getGender = function () { return cody.gender }
console.log(cody.getGender())
console.log(cody)
// -----------
const myObject = new Object()
myObject['0'] = 'f'
myObject['1'] = 'o'
myObject['2'] = 'o'
console.log(myObject)
// ---------
const myString = new String('foo')
console.log(myString)
// --------------
const Person = function (living, age, gender) {
  this.living = living
  this.age = age
  this.gender = gender
  this.getGender = function () { return this.gender }
}
const smith = new Person(true, 33, 'male')
console.log(smith)

const myNumber = new Number(23)
const mystring = new String('male')
const myBoolean = new Boolean(false)
const mycbject = new Object()
const myArray = new Array('too', 'bar')
const myFunction = new Function('x', 'y', 'return x*y')
const myDate = new Date()
const myRegExp = new RegExp('\bt [a-z]\b')
const myError = new Error('Sorry!')
console.log(myNumber.constructor)
console.log(myString.constructor)
console.log(myObject.constructor)
console.log(myArray.constructor)
console.log(myFunction.constructor)
console.log(myDate.constructor)
console.log(myRegExp.constructor)
console.log(myError.constructor)
