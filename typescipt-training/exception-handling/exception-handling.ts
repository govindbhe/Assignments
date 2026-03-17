//exception handling== handling the exceptions.
//try...catch..finaly=== when there is n exception and if you want to handle the exception and continue  the exception process

// throw == when there is no exception but the user intentionaly wants to fail the program by trowing an exception

let input:any;
// console.log(input.tolowerCase()); 

// console.log("EXCECUTION IS COMPLETED");

try{
    console.log(input.tolowerCase());
} catch(error){
    console.log("THERE IS A PROBLEBM IN YOUR CODE");
    console.log(input.upperCase());
}finally{
    console.log("EXCECUTION IS COMPLETED");
}

