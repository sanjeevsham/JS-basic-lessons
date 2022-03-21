 const names =['sanjeev','sham','karthi','saran'];
// // console.log(names[0]);
// // console.log(names.length);
// // console.log(names[names.length-1]);
// //----------mathod of array
// names.push('suresh');
// //console.log('After push:'+ names);
// //push will add the item at end
// //it representa the entire items in  the array
// const names2=[...names,'Raj'];
// //console.log('names2:'+ names2);

// // unshift adds data to the begnning
// names.unshift('poppy');
// //console.log('unshift:'+names);

// const names3=[...names,'Raj'];
// //console.log(names3);
// //slice takes 2 parameters 
// // it has copied 2 values from the index 0 and assigned to b1
// const bikes =['bianchi','miele','panasonic','miyata','RE'];
// const b1=[...bikes.slice(0,2)];
// //console.log(b1)

// const b2=[...bikes.slice(2)];
// //console.log(b2) //LAST 2

// const newBikes =[
//     ...bikes.slice(0,2),
//     'benotto',
//     ...bikes.slice(2)
//     ];
// //console.log('newBikes:'+ newBikes)

// const newBikes2 =[
//     ...bikes.slice(0,3),
//     'benotto',
//     ...bikes.slice(4)
//     ];
// console.log('newBikes2:'+ newBikes2)

//const indexOfSam= names.findIndex(names => names === 'sham');
//console.log('IndexOfSAM:'+indexOfSam)

//write a function to delete the name
// function deleteName(name1){
// const Index1= names.findIndex(names => names === name1);
// const  newArray=[
//     ...names.slice(0,Index1),
//     ...names.slice(Index1+1)]
//     console.log('newarray'+newArray)
// }
// deleteName('sham')

//const numbers=[1,2,3,4,5,6,7,8,9];
//console.log(numbers);

//numbers.splice(3,2);
//(method) Array<number>.splice (start: number, deleteCount?: number) 
// Mutation Method - modifies /deletes the value in the source array
// from the 3rd index delete the next 2 values
//console.log(numbers);
//const pizzaSlice=numbers.slice(2,4);
// (method) Array<number>.slice (start?: number, end?: number): 
// Immutable method does not changes the source array.
// console.log('pizzaSlices:'+pizzaSlice);
// console.log('Original Numbers:'+ numbers);

const numbers=[1,2,3,4,5,6,7,8,9];
numbers.reverse()
console.log(numbers)

const numbersReversed=[...numbers].reverse();
console.log(numbersReversed)