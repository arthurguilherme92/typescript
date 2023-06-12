function noReturn():void {
    console.log("Hello!");

    //return 3
};

noReturn()

//Callback like argument
console.log("-----Call back like arguments------");

function Greeting(name: string): string {
    return `Hello ${name}, how are you doing?`;
};

function preGreeting(f: (name: string) => string, userName: string) {
    console.log("Waiting . . .");

    const greet= f(userName);

    console.log(greet);
};

preGreeting(Greeting, "Arthur");

console.log("-----End Call back like arguments------");
//End of the Callback like argument
//Generic Function
console.log("-----Generic Function------");
function firstArgument<T>(arr: T[]): T {
    return arr[0];
};

console.log(firstArgument([1, 2, 3, 4]));
console.log(firstArgument(["a","b","c","d" ]));

function mergeObjects<U, T>(obj1: T, obj2: U) {
    return {
        ...obj1,
        ...obj2
    };
};

const newObject = mergeObjects({n: "Arthur", age: 31}, {profission: "developer", nationality: "brazilian"});
console.log(newObject);


console.log("-----End of the Generic Function------");
//End of the Generic Function