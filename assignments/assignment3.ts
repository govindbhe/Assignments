// 1. Create two arrays to store student names["Suresh", "Mahesh", "Naresh"] and
// marks[75, 80, 82] Add 10 marks to each students using assignment operators and
// store it into another array, after adding 10 marks identify the average marks of all
// students

let studentname: string[] = ["Suresh","mahesh","Naresh"];
let marks:number[]=[75,80,82];

let newmarks: number[] = [marks[0] += 10, marks[1] += 10, marks[2] += 10]
console.log(newmarks);

let sumofnewmarks: number = (newmarks[0] + newmarks[1] + newmarks[2] );
let lengthofstudents: number = studentname.length;
let avaragemarks: number = sumofnewmarks / lengthofstudents;
console.log(avaragemarks);