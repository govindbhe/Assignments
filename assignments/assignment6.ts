// function Primenumber(n:number)
// { if(n <= 1) {
//     console.log(`Number ${n} is NOT prime number`)
//     }
//     for (let i=2;i<n;i++){
//        if (n%i==0){
//     console.log(`Number ${n} is prime NOT number`)
//       }

//     console.log(`Number ${n} is a Prime number`);
//     }
// }
// Primenumber(7);
// Primenumber(25);
// Primenumber(1);

//Given a number n, determine whether it is a prime number or not. A prime number is a
// number greater than 1 that has no positive divisors other than 1 and itself.

function isPrime(n: number){
    if (n <= 1) {
        console.log(`Number ${n} is not a Prime number`);
        return;
    }
    for (let i = 2; i < n; i++) {
        if (n % i === 0) {
            console.log(`Number ${n} is not a Prime number`);
            return;
        }
    }
    console.log(`Number ${n} is a Prime number`);
}       

isPrime(7);
isPrime(25);
isPrime(1); 