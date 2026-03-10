//A bank evaluates loan applicants based on the following criteria:

let CreditScore: number = 720;
let customerName: string = "John Doe";
let income: number = 52000.0;
let isEmployed: boolean = true;
let debtToIncomeRatio: number = 35.0;

// 1. Credit Score:
// If the credit score is above 750, the loan is automatically approved.
// If the credit score is between 650 and 750, additional checks are performed.
//If the credit score is below 650, the loan is denied.

if (CreditScore>=750)
    {
    console.log("the loan is automatically approved.");
}
else if (CreditScore >=650 && CreditScore<750)
{
    console.log("additional checks are performed");
}
else {
    console.log("loan is denied.")
}

//income
// For credit scores between 650 and 750, the customer’s income must be at least $50,000 for the loan to be considered.

if (CreditScore >= 650 && CreditScore < 750 && income == 55000){
console.log("the loan is considered");
}
else {
    console.log("the loan is not considered");
}

// 3. Employment Status:
// If the customer’s income is at least 50,000, the system checks whether the customer is employed.
// If the customer is unemployed, the loan is denied.
if (income >= 50000 && isEmployed==true )
{
    console.log("loan is considered");
}
else{
    console.log("loan is denied");
}

// 4. Debt - to - Income Ratio:
// If the customer is employed, the system checks the debt - to - income(DTI) ratio.
// If the DTI ratio is less than 40 %, the loan is approved.
// If the DTI ratio is 40 % or greater, the loan is denied.

if (isEmployed== true && debtToIncomeRatio < 40)
{
    console.log("loan is approved");
}
else if (isEmployed == true && debtToIncomeRatio >= 40)
{
    console.log("loan is denied");
}
else
{
    console.log("not eligible for loan");;
}