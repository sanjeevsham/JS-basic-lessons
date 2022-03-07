/* eslint-disable no-var */
/* eslint-disable no-undef */
/* eslint-disable prefer-const */
/* eslint-disable no-unused-vars */
/* eslint-disable no-const-assign */
/* eslint-disable quotes */
function getChild (parent) {
  if (parent == null) throw TypeError()
  return Object.create(parent)
}
// const o4 = { x: "dont change the valuse" }
// console.log(o4.x)
// const p = getChild(o4)
// console.log(p)
// o4 = null
// p = getChild(o4)
// console.log(p)
// Object.prototype = 0
// console.log(Object)
let o5 = {}
// console.log(o5)
o5.x = 100
// console.log(o5)
p = getChild(o5)
// console.log(p)
p.y = 200
let q = getChild(p)
q.z = 300
// console.log(q)
console.log("q.x + q.y + q.z" + (q.x + q.y + q.z))
console.log("p.x + p.y" + (p.x + p.y))
console.log("o5.x + o5.y" + (o5.x + o5.y))
console.log("o5.x" + o5.x)

let book = {
  'main title': 'java script',
  subtitle: 'java script training',
  for: 'student',
  author: {
    first: 'sanjeev',
    last: 'sham'
  }
}
let len
// book = null
// if (book) {
//   if (book.subtitles) {
//     len = book.subtitle.length
//     console.log(len)
//   } else console.log("book.subtitle undefined:")
// } else console.log("book is null")

len = book && book.subtitle && book.subtitle.length
if (len) console.log(len)
console.log(book.author)
delete book.author
console.log(book.author)

console.log(book["main title"])
delete book["main title"]
console.log(book["main title"])

let o6 = { x: 100 }
console.log(o6.x)
delete o6.x
console.log(o6.x)
console.log(o6.toString)
delete o6.toString
delete Object.prototypes
var a = 1
delete this.a
function f1 () {}
delete this.f1()
