/* Typeof Type Guard*/
console.log("---Type Guard---");

function sum(a: number | string, b: number | string) {
    if(typeof a === "string" && typeof b === "string") {
        console.log("They are strings => ", parseFloat(a) + parseFloat(b));
    } else if(typeof a === "number" && typeof b === "number") {
        console.log("They are numbers => ", a + b);
    } else {
        console.log("Impossible to do the calc, verify your types!");
    };
};

sum("4", "8");
sum(7, 8);
sum("8", 4);

/* Checking if the value there is*/
console.log("---Value is there?---");

function operations(arr: number[], operation?: string | undefined) {
    if(operation === "sum") {
        const sum = arr.reduce((i, total) => i + total);
        console.log(sum);
    } else if (operation === "multiply"){
        const multiply = arr.reduce((i, total) => i * total);
        console.log(multiply);
    } else {
        console.log("Plese, choose a operation!")
    };
};

operations([1, 4, 8]);
operations([1, 4, 8], "sum");
operations([1, 4, 8], "multiply");