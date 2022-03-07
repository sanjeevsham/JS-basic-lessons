/* eslint-disable camelcase */
/* eslint-disable semi */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
// 3 ways to create strings Variabled

// 1. using single quotes:
// 2. using double quotes:
// 3. using back ticks:

const my_name = 'sanjeev';
const middle = 'sham';
const last = 'N';
console.log(my_name);
console.log(middle);
console.log(last);

const sentence1 = 'she\'s so "cool"';
console.log(sentence1);
const sentence2 = "she's so cool";
console.log(sentence2);
const sentence3 = '\'she\'s so cool\'';
console.log(sentence3);
const sentence4 = "she's so \"cool\"";
console.log(sentence4);

const songl = ` T Like
  ARR songs and
  Aniruth songs`;
console.log(songl);

const hello3 = 'hello my name is' + my_name + '. Nice to meet you';
console.log(hello3);
const hello4 = `hello my name is' + $(my_name)  '. Nice to meet you. I am${1 + 100} years old`;
console.log(hello4);

const html = `<div>
              <h2>${my_name}</h2>
              <P>${hello3}</p>
              </div>;`
console.log(html);
// document.body.innerHTML = html;
