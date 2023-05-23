function showBalance(balance: string | number) {
    console.log(`The balance this year is: ${balance}`);
};

showBalance(100);
showBalance("200");


const arrayTest: Array<string | number> = [1, "Arthur"];
const arrayTest2: Array<number | string> = [12, "Guiller"];

console.log(arrayTest);
console.log(arrayTest2);

//Advancing in Union Types

function ShowRole(role: string | boolean) {
    if(typeof role === "boolean") {
        return "User don't approved!"
    };

    return `The function of the User is ${role}`;
};
console.log("_________________");
console.log(ShowRole(true));
console.log(ShowRole(false));
console.log(ShowRole("Developer"));