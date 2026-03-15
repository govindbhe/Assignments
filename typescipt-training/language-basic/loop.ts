//for loop

// for(let i=0;i<=10;i++){

//     console.log("Ram")
// }

//while loop
// let i:number=1;
// while (i<10){
// console.log(`While loop${i}:Ram`);
// i++

// }


//do while loop
// let k:number=0;
//  do{
// console.log("NUMBER"+k)
// k++
//  }
//  while (k <5);

 //for in loop

//  interface person {
//   name:string,
//   rollnom:number,
//   stnrd:number,
//   sclool:string

//  }

//  let student:person={
// name:"Govind",
//      rollnom: 250,
//      stnrd: 12,
//      sclool:"Spppu school"

// }


// for(const key in student){
//  const typedkey= key as keyof person;
// console.log(typedkey,student[typedkey]);
// }


//for of loop

let arrry:string[]=["mango","banana","apple"];

for(const Array of arrry){
    console.log(Array);

}

let data:Set<string>=new Set();
data.add("1223");
data.add("Govind");
data.add("fshdcn");

for(const Data of data)
{
    console.log(Data);
}
 let std:Map<number,String>=new Map();
 std.set(201,"Govind");
 std.set(202,"785655");
 std.set(256,"null");

 for(const Std of std){
    console.log(Std);
 }


 interface m{
    name:string,
    number:number
 }

 let M:m={
    name:"govind",
    number:250
 }

 for(const jay in M){
  const ty=jay as keyof m;
  console.log(ty,M[ty]);

 }

 