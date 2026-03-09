console.log("***********Test cse1***********");

logIntoApplication("Chrome")
LogoutAndClosedBrowser()
console.log("***********Test cse2***********");

logIntoApplication("Firefox")
GetAccountBalance()
console.log("verify account balance is" + GetAccountBalance());
LogoutAndClosedBrowser()
console.log("***********Test cse3***********");
logIntoApplication("Edge")
console.log("VERIFY to Account STATEMENT ");
LogoutAndClosedBrowser()

function logIntoApplication(browsername){
    console.log(`launch the ${browsername} browser`);
    console.log("enter the url");
    console.log("enter the username and password");
    console.log("click on login button");
    console.log("verify the home page is displayed or not");
}

function LogoutAndClosedBrowser(){
    console.log("logout from the application");
    console.log("close the browser");
}
function GetAccountBalance(){
    console.log("nevigate to Account balance page");
    let accountBalance=15000;
     return accountBalance;
}