//functions- function is all about block of code which perform a specific task. It is reusable and can be called multiple times in a program. It can take input parameters and return output.

// types of function
//1.named function
//2.anonymous function
//3.Arrow function

//1.named function
function addtwo (browsername:string):void
{
   
    console.log("browsername" + browsername)
    
}
function add(Name:String,age:number):void{

console.log("Name :"+ Name);
console.log("Age :"+age);

}
add("Govind",29);
//2.Arrow function-
//Regular function

function sum(a:number,b:number):number{
    let c:number=a+b;
    return c;
}
console.log(sum(10,30));

//Arrow function
let square=(a:number)=>a*a;
let add1=(a:number,b:number)=>(a+b);

console.log(add1(20,10));
console.log(square(5));
//anonymous function- unknown 
//function(function){  function body
//}
function mainfunction(innerfunction:(a:number)=>number):void{
console.log(innerfunction(8));
}

mainfunction(

    function(a:number):number{
        return a*a;
    }
    
)

  function top (inner:(a:number)=>number){

   console.log( inner(5));
  }

  top(
  function top(a:number):number{

    return a+a;

  }
  )

//function implemantation
//1.function without parameter and withount return type
function greet():void{
    console.log("Hallo World");
}
greet();
//2.function with parameter and withount return type

function greetperson(name :string):void{

    console.log(`Hallo body ${name} hii`)
}
greetperson("Govind");
//3.function without parameter and with return type

function greats():String{
    return "Hallo bharat";
}
greats;

function currentdate(): Date {
    return new Date();
}
//4.function with parameter and with return type

function add3(a:number,b:number):number{

    let c:number=a+b;
    return c;
}
console.log(add3(5,3));

//5 function with optional parameter

function personwithoptional(name:string,age?:number):void
{
    if(age){
console.log("Hallo"+name) 
console.log("Age"+age)
}
else{
console.log("Hallo"+name)
}
}

//6. function with default parameter

function printempdetails(name:string ,visastatus:boolean=false):void{

    console.log("Employee name :"+name);
    console.log("Visa status :"+visastatus);
}
printempdetails("Gocind",true );

//function with rest parameter
function sumofNumber(...numbers:number[]):void{
let sum:number=0;

for(let num of numbers){
    sum+=num;
}
    console.log("sum"+sum);
}
sumofNumber(1,2,3);