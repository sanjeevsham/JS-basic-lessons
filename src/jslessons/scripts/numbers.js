/* eslint-disable prefer-const */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
// number

const age = 100
const money = 100.50
console.log(typeof age)
console.log(typeof money)
// typeof is used to find the type
console.log('10' - '3')
// The above works with multiplication, division and subtracti but not with addition (+)
// because the sign is also used for *concatenation
// math
console.log(Math.round(2.5))
console.log(Math.floor(2.4))
console.log(Math.ceil(2.4))
console.log(Math.random())

const sweets = 20
const Kids = 3
const eachKidsGets = Math.floor(sweets / Kids)
console.log(eachKidsGets)
const leftsweets = sweets % Kids
console.log(leftsweets)

console.log(0.1 + 0.2)

console.log(typeof Infinity)
console.log(typeof -Infinity)
const resulr = 10 / 'hello'
console.log(typeof NaN)

let x = 100

let result = Number.isInteger(x)

console.log(`Is x a number: ${result}`)

let y = 'abcd'

result = Number.isInteger(y)

console.log(`Is y a number: ${result}`)

result = (typeof y === 'string')

console.log(`Is y a String: ${result}`)

let flag = true

result = (typeof flag === 'boolean')
console.log(`is flag a boolean: ${result}`)

result = (typeof nos === 'object')

console.log(`Is nos an object: ${result}`)
