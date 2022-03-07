/* eslint-disable quote-props */
/* eslint-disable comma-dangle */
/* eslint-disable no-unused-vars */
const person = {
  first: 'sanjeev',
  last: 'N',
  age: 20
}
console.log(person.first)
console.log(person.last)
console.log(person.age)
person.first = 'sanj'
person.last = 'sham'
console.log(person.first)
console.log(person.last)
person.last = null
console.log(person.last)

const empty = {}
const point = { x: 10, y: 50 }
const point2 = { x: point.x, y: point.y + 1 }

const book = {
  'main title': 'java script',
  'sub-title': 'java script training',
  'for': 'student',
  author: {
    first: 'sanjeev',
    last: 'N'
  }
}
console.log(book['main title'])
console.log(book['sub-title'])
console.log(book.for)
console.log(book.author.first)
console.log(book.author.last)
// console.log(book.sub - title)
console.log(book.for)
