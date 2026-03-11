// Bank Transactions
// Positive value refers Credit and Negative refers Debit Transaction
// Transactions Amount
// 1 50000
// 2 - 2000
// 3 3000
// 4 - 15000
// 5 - 200
// 6 - 300
// 7 4000
// 8 - 3000
// First Store all the transactions in any data structure of Your Choice from collections, and by using
// Loops and conditional statements
// 1. Print total number of credit and debit transactions completed
// 2. Print the total amount credited and debited in account
// 3. Print total amount remaining at the end in Bank Account
// 4. If any transaction limit exceeds + /- 10000 then print the message “Suspicious credit/ debit
// Transaction with Amount” and also print total number of suspicious transactions

let banktransactions:number[]=[50000,-2000,3000,-15000,-200,-300,4000,-3000];
let lenght:number=banktransactions.length;
console.log(lenght);
 for (let i:number=0;i<banktransactions.length;i++)
{
    console.log(banktransactions[i]);
 }
// 2. Print the total amount credited and debited in account

let totalcreditAmount:number=0;
let totaldebiteAmount:number=0;

for (let i: number = 0; i < banktransactions.length;i++)
{
    if (banktransactions[i]>0)
    {
        totalcreditAmount+=banktransactions[i];
    }

    else if (banktransactions[i]<0)
    {
        totaldebiteAmount += banktransactions[i];
    }
}
console.log("Total credit amount is " + totalcreditAmount);
console.log("Total debit amount is " + totaldebiteAmount);

// 3. Print total amount remaining at the end in Bank Account
let totalremainingamount:number=0;

totalremainingamount= totalcreditAmount + totaldebiteAmount;

console.log("TotalremainingAmount :"+totalremainingamount);
// 4. If any transaction limit exceeds + /- 10000 then print the message “Suspicious credit/ debit
// Transaction with Amount” and also print total number of suspicious transactions

let suspiciousTransactions:number=0;
for (let i: number = 0; i < banktransactions.length;i++){
    if (banktransactions[i]>=10000 || banktransactions[i]<=-10000)
    {
        console.log("Suspicious credit/ debit with Amount " + banktransactions[i]);
        suspiciousTransactions++;
    }
    else{
        console.log(banktransactions[i]);
    }
}
console.log("Total number of suspicious transactions: " + suspiciousTransactions);