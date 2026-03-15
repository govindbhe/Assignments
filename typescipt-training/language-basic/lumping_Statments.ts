//

for(let i=0;i<=5;i++){

    if(i==2)
{
    break;
}
console.log(i);
}

for (let i = 0; i <= 5; i++) {

    if (i == 2) {
        continue;
    }
    console.log(i);
}
//return
function add(a:number,b:number):number{

console.log(a+b);
    return a + b;
}

add(5,15);

//throw
function withdrow(amount:number){
    if(amount<=0){
throw new Error("invalid amount");
    }

    console.log("Witdrow Succsesfully :"+amount);
}
withdrow(0);
