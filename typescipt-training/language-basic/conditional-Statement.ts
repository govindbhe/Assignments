
//Conditional statement
//if,else if,else,switch
// let Studentmark:number=32;
// if(Studentmark>90){
//     console.log("Grade A+");

// }
// else if(Studentmark>80 && Studentmark<=90){
//     console.log("Grade A");
// }
// else if(Studentmark>70 && Studentmark<=60){
//     console.log("Grade B");

// } else if (Studentmark > 60 && Studentmark <= 35){
//     console.log("Grade C");
// }
// else{
//     console.log("Fail");
// }


let Priority:string="High";
switch (Priority){

    case "High":console.log("Defect has high priority");
    break;

    case "mediam":console.log("Defect has medium");
    break;
    case "low":console.log("defecct has low priority");
    break;

    default:
    console.log("invalid priority")
}