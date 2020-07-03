// JS is a dynamic type language where data types are automatically assigned to variables

/**************************
 * Variables and data types
 **************************/

let firstName = 'John'; // You can also use double quotes for string like "John" but using single quotes is a bit modern
console.log(firstName);

let lastName = 'Smith';
let age = 32; // Floating point numbers by default (both integer and decimals)

let fullAge = true; // Boolean data type true/false
console.log(fullAge);

let job; // undefined data type
console.log(job);

job = 'Doctor';
console.log(job);

let noData = null; // null data type
console.log(noData);

// Rules for naming variables:

/*

let 10bucks = 10; // can't use number at the start of variable names

let _10bucks = 10; // correct

let me&you = 'Me and you'; // can't use any characters except _ and $ in variable names

let if = 'else' // can't use reserved js keywords as variable names

*/

/******************************
 * Mutation and Type Coercion
 *******************************/

 let firstName = 'John';
 let age = 32;

 // Types Coercion
 console.log(firstName + ' ' + age); // -> John 32 in console, js by itself converts number into string

 let job, isMarried, marry; // initially undefined
 job = 'Doctor';
 isMarried = true;

 console.log(firstName + ' is a ' + age + ' year old ' + job + '. ' + marry + ' Is he married? ' + isMarried); // by using type coercion js converts undefined and boolean to string

// Variable Mutation

age = 'thirty two'; // number age is mutated to string age

job = 'plumber';

alert(firstName + ' is a ' + age + ' year old ' + job + '. ' + marry + ' Is he married? ' + isMarried);

let lastName = prompt('What is your last name?'); // Prompting user to type last name
console.log(firstName + ' ' + lastName);
