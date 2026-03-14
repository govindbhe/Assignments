//Data Types in Js
//Primitive
//Non-Primitive Data Type

//immutable
// let a=10;
// a+20;
// console.log(a);

//muatable 
// let obj={
// "name":"Govind",
// "id":12345

// }
// obj.age=25;
// console.log(obj);

//Primitive data Type

//number,string,boolean,undefined.null,symbol

// 1.number-->the data which used to stored numbers with decimals and without decimals

// let num1=10;
// let num2=12.452;
// console.log(num1);
// console.log(num2);

//String ->used to store text value or a collection of charactors together within the quatation(single,double,back tik)

// let name3 = 'Govind';
// let location = "pune";
// let comp = `tcs`;
// console.log(name3);
// console.log(location);
// console.log(comp);

// console.log("name is"+name3+"location is"+location+"comp name is"+comp);

// console.log(`name is ${name3} and location is${location}`);

//boolean-data type to store true and false values;
// let x=12;
// let y=20;
// let z=x>y;
// console.log(typeof z);

4.//undefined--> variable decleared but not assigned any value.

// let age;
// console.log(age);

//null- decleared and assigned null or umpty value;
// sallary=45000;
// sallary=null;
// console.log(sallary);

//symbol-symbol represent a unique hidden identifier


//Non Primitive data type

//object-object data type reprasent the collection of key value pairs within the curly braces.

// let person={
// name3:"govind",
// empid:1256,
// visastaus:true,
// address:{
// city:"hydrabad",
// state:"ts"
// }
// }
// person.sallary=10000;

// console.log(person);

// console.log(person.address.city);

// console.log(person["name3"]);
// console.log(person.address["city"]);

// //Array-Array reprasent a list of values

// let fruits=["Apple","grapes","Mango"];
// let prices=[100,220,300];
// let fruitsAndprices = ["Apple",100, "grapes",200, "Mango",300];
// console.log(fruits);
// console.log(prices);
// console.log(fruitsAndprices);
// console.log(fruits[1]);
// console.log(fruitsAndprices[2]);

// //function-function reprsents a block  of code or collection of statement written togther to complete a particular task.
// function logIntoApplication(browsername) {
//     console.log(`launch the ${browsername} browser`);
//     console.log("enter the url");
//     console.log("enter the username and password");
//     console.log("click on login button");
//     console.log("verify the home page is displayed or not");
// }

// function LogoutAndClosedBrowser() {
//     console.log("logout from the application");
//     console.log("close the browser");
// }
// function GetAccountBalance() {
//     console.log("nevigate to Account balance page");
//     let accountBalance = 15000;
//     return accountBalance;
// }

//Set  -->set represent a collection of unique values
// let emplid=new Set();
// emplid.add(456326);
// emplid.add(456326);

// emplid.add(1256);
// console.log(emplid);

//5.Map -->map represent a collection of key value pairs where keys are unique and values can be duplicate.

// let empldata=new Map();
// empldata.set(124,"bharat");
// empldata.set(125,"sarath");
// empldata.set(124,"sarath");
// console.log(empldata);
//Date --> date represent the date and time of the system. It is used to work with date and time in JavaScript.

// let currentdate=new Date();
// console.log(currentdate);
// console.log(currentdate.getFullYear());
// console.log(currentdate.getMonth()+1);//In JavaScript, the month is zero-based, which means that January is represented as 0, February as 1, and so on. Therefore, to get the correct month number, we need to add 1 to the result of getMonth() method.
// console.log(currentdate.getDay());//In JavaScript, the getDay() method returns the day of the week as a number, where 0 represents Sunday, 1 represents Monday, and so on up to 6 which represents Saturday. Therefore, if you want to get the name of the day instead of the number, you can use an array to map the numbers to their corresponding day names. For example:
// console.log(currentdate.getHours());
// console.log(currentdate.getMinutes());
// console.log(currentdate.getSeconds());

// let Value=10;
// let Name ="Hallo";
// let boolean =true;
// let b=null;
// let x;

// console.log(Value);
// console.log(Name);
// console.log(boolean);
// console.log(b);
// console.log(x);

// var Country=Symbol();

// let ProductDetails={
// Name:"iphone",
// price:50000,
// [Country]:'india'
// };
// console.log(ProductDetails);
// console.log(ProductDetails[Country]);
//Non Primitive data type-1.Object 2.Array 3.

// objet

// let personDetaisl={
//     name:"Govind",
//     Age:30,
//     Address:[{
//         Vilage:"Atkali",
//         Tq:"Nmigaon",
//         Dist:"Nanded"
//     },
//     {
//          Vilage: "Takli",
//         Tq:"Nmigaon",
//         Dist:"Nanded"
//     }
//     ]
// }
// console.log(personDetaisl);
// console.log(personDetaisl.Address[1].Vilage);


//Array

// let Fruits=["Mango","Apple","Banana"];
// console.log(Fruits.length);
// let FruitsPrices=["Mango",100,"Banana",200,"Apple",260];
// console.log(FruitsPrices);

//Function

// function functionName (name,Age)
// {
//     console.log(`my name is :${name} and my age is ${Age}`);
// }

// functionName("Govind",25);

//Date-
//  let today=new Date();
//  console.log(today);

 //set-
 let id=new Set();
id.add(10);
id.add(10);
id.add("String");


console.log(id);

// map-

let empdata=new Map();
empdata.set(101,"Bharat");
empdata.set(102,"sarat");
empdata.set(101,"govind");

console.log(empdata);



