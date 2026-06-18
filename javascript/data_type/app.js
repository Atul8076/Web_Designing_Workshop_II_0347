let name = "Atul";
console.log(name);

// primitive data type
// non primitive data type

//primitive data type 

// string 

let name1 = "atul";
console.log(name1);
console.log(typeof name1);

// number 

let age = 34;
console.log(age);
console.log(typeof age);

// boolean

let isStudent = true;
console.log(typeof isStudent);

// undefined 

let address;
console.log(address)
console.log(typeof address);

// null --- intentionally assigned value to the variable
  
let city = null;
console.log(city);
console.log(typeof city);

// bigint 

let num = 12345678902345678123456789123456789n;
console.log(num);
console.log(typeof num);


// symbol --- unique value 
  
let sym1 = Symbol("sym");
let sym2 = Symbol("sym");
console.log(sym1);


// non primitive data type 

// object  --- value are stored in key value pairs 

let person = { 
    name: "atul yadav ",
    age: 25, 
    isStudent: false ,
};
console.log(person);
console.log(typeof person);

// value of object can be accessed using dot notation or bracket notation 

console.log(person.name); // atul yadav
console.log(person["age"]); // 25


// array 

let numbers = [1,2,3,4,5,6,7,8,9,10];
console.log(numbers);
console.log(typeof numbers);

//let fruits = [1,"apple" , true , null , undefined];
// console.log(fruits);

let arr1 = [1,"hello","world",56];
console.log(arr1);

// array opration 
// push()-- add element in array at the end 

let arrnew = [1,2,3];
arrnew.push(4);
console.log(arrnew);

// pop() -- remove last element from array 

arrnew.pop()
console.log(arrnew);

// shift() -- remove first element from array 

arrnew.shift();
console.log(arrnew);

// unshift() --add an element to the beginning of the array 

arrnew.unshift(0);
console.log(arrnew);

// for loop on array

for (let i=0; i<arrnew.length; i++){
    console.log(arrnew[i]);
}

//for each loop on array
arrnew. forEach(function(element)  {
console.log(element);
});

// map() --- map() = array ke har element ko change karke new array banana 
/* syntax -- array.map(function(element, index){
   return newValue;
});*/

let squarearr = arrnew.map(function(element){
    return element*element;
});
console.log(squarearr);

// filter() ek array method hai jo kisi array ke elements ko condition ke basis par select (filter) karta hai.

// 👉 Ye ek naya array return karta hai, original array change nahi hota.


let evenarr = arrnew.filter(function(element){
    return element % 2 ===0;
});
console.log(evenarr);


// reduce() reduce() is an array method that processes all elements of an array and converts them into a single value.

