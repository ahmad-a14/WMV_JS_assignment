/*
Ahmad Ali
Discord : ali_a007#8166
Js Assignmet
Date : 10/6/22
*/

let a ='Ahmad';
let b = 'Ali';

console.log(`is ${a} == ${b}` );
console.log(a == b);

console.log( 'is '+ a.toLocaleLowerCase() +' == ' +b.toLocaleLowerCase() );
console.log(a.toLocaleLowerCase() == b.toLocaleLowerCase());

let i = 10;
let j = 14;

console.log(`equality`);
console.log(i ==j);
console.log(`inequality`);
console.log(i != j);
console.log(`less than`);
console.log(i < j);
console.log(`greater than`);
console.log(i > j);
console.log(`greater than or equal to`);
console.log(i >= j);
console.log(`less than or equal to`);
console.log(i <= j);

console.log(`Using 'and' and 'or'`);
console.log(i < j && i >5 || i <0);

console.log(`Item is in the list`);
let arr =[1,2,3,4,5];
console.log(arr.includes(5));

console.log(`Item isn't the list`);
console.log(!arr.includes(1));