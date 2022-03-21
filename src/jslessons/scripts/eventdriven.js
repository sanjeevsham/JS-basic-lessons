/*eslint-disable*/
const btn1 = document.querySelector('.btn1');
const coolButton = document.querySelector('.btn2');

function handleClick() {
  console.log('IT GOT CLICKED!!!'); //ctrl+. to add mog
}
btn1.addEventListener('click', handleClick);
const hooray = () => console.log('HOORAY!!');
coolButton.addEventListener('click', hooray);
//removoveeventlistener
// adding bulk event handling
btn1.removeEventListener('click', handleClick);

const buyButtons = document.querySelectorAll('button.buy');

function handleBuyButtonClick(event) {
 console.log('buy');
  const button = event.target; //refer to dom element
 console.log(button.textContent);
 console.log('Price:' + parseFloat(event.target.dataset.price));
 console.log(event.currentTarget);
 console.log(event.target === event.currentTarget);
 event.stopPropagation();
}
buyButtons.forEach(function(buyBtn) {
 buyBtn.addEventListener('click', handleBuyButtonClick);
});
//event .target gives the reference to dom element.
//box event bubbling.click many event
//container click , boxclick , flex click
//disable the propagation of event***stop propagation.
//_____________________________________________________________
const photoE1 = document.querySelector('.photo');
photoE1.addEventListener('mouseenter', e => {
 console.log(e.currentTarget);
console.log(this);
});
//____________________________________________________________
window.addEventListener('click',
 function(e) {
  console.log('Windows is clicked');
  console.log('bubbles:' + e.bubbles)
 }, { capture: true }
);
///because we stop the event bubbling process after the windows click 
//so that windows click only works
/*eslint-disable*/
function Car() {
let milesDriven = 0; 
let speed = 0;
 this.acceleration = (velocity, distance) => {
 speed += velocity;
 milesDriven += distance;

 }
 this.getMilesDriven = () => milesDriven;
 this.getspeed = () => speed;
 //specify the current object=-098888887
}
const testCarModule = new Car();
console.log('Miles:' + testCarModule.getMilesDriven());
console.log('speed:' + testCarModule.getspeed());
//
testCarModule.speed = 100;
//adds a new field to the object
testCarModule.milesDriven = 10;
//add a new field to the object.
console.log('Miles:' + testCarModule.getMilesDriven());
console.log('speed:' + testCarModule.getspeed());

testCarModule.acceleration(4, 10);
console.log('Miles:' + testCarModule.getMilesDriven());
console.log('speed:' + testCarModule.getspeed());
