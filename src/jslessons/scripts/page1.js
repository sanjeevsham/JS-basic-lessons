/* eslint-disable quotes */
/* eslint-disable semi */
/* eslint-disable new-parens */
/* eslint-disable no-unused-vars */
/* eslint-disable no-new-object */
/* eslint-disable no-array-constructor */
const o = new Object();
const a = new Array();
const d = new Date();
const f1 = new function () {
  console.log('The cow jumped over the moon');
};
console.log("date=" + d)
// f1();
// -----------
const o1 = Object.create({ x: 100, y: 200 });
console.log('x=' + o1.x + 'y=' + o1.y);
console.log(o1);

const o2 = Object.create(null);
const o3 = Object.create(Object.prototype);
console.log(o2);
console.log(o3);
const o4 = { x: "dont change the valuse" };
console.log(o4);
const p = Object.create(o4);
console.log(p)
