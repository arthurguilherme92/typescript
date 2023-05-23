function showBalance(balance) {
    console.log("The balance this year is: ".concat(balance));
}
;
showBalance(100);
showBalance("200");
var arrayTest = [1, "Arthur"];
var arrayTest2 = [12, "Guiller"];
console.log(arrayTest);
console.log(arrayTest2);
//Advancing in Union Types
function ShowRole(role) {
    if (typeof role === "boolean") {
        return "User don't approved!";
    }
    ;
    return "The function of the User is ".concat(role);
}
;
console.log("_________________");
console.log(ShowRole(true));
console.log(ShowRole(false));
console.log(ShowRole("Developer"));
