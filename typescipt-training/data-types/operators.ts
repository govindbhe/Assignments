//operators: Operators are used to perform operations on variables and values. TypeScript supports various types of operators, including arithmetic, assignment, comparison, logical, and more.
//1.Arthmatic Operators -->(+,-,*,/,%,++,--)
//2.Assignment Operators -->(=,+=,-=,*=,/=,%=)
//Comparison Operators -->(==,===,!=,>,<,>=,<=)
//logical operator -->(&&,||,!)
//Ternary Operator -->(?)

//Arthamatic Operator
//+ addition
//- subbtraction
//* multiplication
// / division
// % modules
// ++ increament (add 1 to the variable)
// -- decreament (substract 1 from variable)

// let a :number=10;
// let b :number=20;

// console.log("Addition :"+(a+b));
// console.log("Subtraction :"+(a-b));
// console.log("Multiplication :"+(b*a));
// console.log("Division :"+(b/a));
// console.log("Modulus :"+(b%a));
// a++;
// console.log("Increment :"+          a);

//Arthmatic Operator

//+,_<*,/,%,++,--


// let X=20;
// let Y=25;
// console.log(X+Y);
// console.log(X-Y);
// console.log(X*Y);
// console.log(X/Y);
// console.log(X%Y);
// X++;
// console.log(X);
// Y++;
// console.log(Y);

//Comparision or relational Operator
// ==,===,!=,>,<,>=,<=,

// let a=10;
// let b=15;

// console.log(a==b);
// console.log(a === b);
// console.log(a != b);
// console.log(a > b);
// console.log(a <b);
// console.log(a >= b);
// console.log(a <= b);


//Assignment Operator
//=,+=,-=,/=,%=,*=
//  let c=10;
//  console.log(c);
//  c +=10;
//  console.log(c);
//  c -=10;
//  console.log(c);
//  c/=10;
//  console.log(c);
//  c%=10;
//  console.log(c);

 //logil operator
 // &&,||,!


 let x=10;
 let y=20;

 console.log(x>y && x<y );
console.log(x > y || x < y)
console.log(!(x > y && x < y));
 
//ternary operator
let result:string=(x>y)?"x is greater than y":"y is greater than x";
console.log(result);