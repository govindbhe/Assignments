//syntax to store data in a variable
//let variableName: dataType = value;
//Data types in TypeScript
//primitives: number, string, boolean, null, undefined, symbol
//non-primitives: object, array, tuple, enum, any, void, never

//=============primitives=================
//1. number-it can store both integers and floating-point numbers
let age: number = 25;
let price: number = 19.99;  
//2. string-it can store text data or combination of characters
let name: string = "John Doe";
let greeting: string = `Hello, ${name}!`;
console.log(greeting); // Output: Hello, John Doe!

//3. boolean-it can store true or false values
let isStudent: boolean = true;
let hasLicense: boolean = false;
//4. null-it represents the intentional absence of any object value
let emptyValue: null = null;
//5. undefined-it represents a variable that has been declared but not assigned a value

let u:undefined;
console.log(u);

//union --> a variable can hold more than one type of value
let empladdress:string | number |boolean = "123 Main St";
console.log(empladdress);;
empladdress = 456; // Now it holds a number
console.log(empladdress);
empladdress = true; // Now it holds a boolean
console.log(empladdress);

//any --> it can hold any type of value, but it is not recommended to use it as it defeats the purpose of using TypeScript
let randomValue: any = "Hello";
console.log(randomValue);       

randomValue = 42; // Now it holds a number
console.log(randomValue);

randomValue = true;

console.log(randomValue); // Now it holds a boolean

//=============non-primitives=================
//1. object-it can store collections of data and more complex entities

interface Personinfor{
    name: string; age: number
} 

let Personinfor: { name:"gOIVND"; age: 25 } ;
console.log(); // Output: { name: 'gOIVND', age: 25 }
//2. array-it can store multiple values of the same type in a single variable
let numbers: number[] = [1, 2, 3, 4, 5];
let fruits: string[] = ["apple", "banana", "orange"];  
//3. tuple-it can store a fixed number of values of different types
let person: [string, number] = ["Alice", 30];           

//functions-it can store reusable blocks of code that perform a specific task
