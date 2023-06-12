var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
function noReturn() {
    console.log("Hello!");
    //return 3
}
;
noReturn();
//Callback like argument
console.log("-----Call back like arguments------");
function Greeting(name) {
    return "Hello ".concat(name, ", how are you doing?");
}
;
function preGreeting(f, userName) {
    console.log("Waiting . . .");
    var greet = f(userName);
    console.log(greet);
}
;
preGreeting(Greeting, "Arthur");
console.log("-----End Call back like arguments------");
//End of the Callback like argument
//Generic Function
console.log("-----Generic Function------");
function firstArgument(arr) {
    return arr[0];
}
;
console.log(firstArgument([1, 2, 3, 4]));
console.log(firstArgument(["a", "b", "c", "d"]));
function mergeObjects(obj1, obj2) {
    return __assign(__assign({}, obj1), obj2);
}
;
var newObject = mergeObjects({ n: "Arthur", age: 31 }, { profission: "developer", nationality: "brazilian" });
console.log(newObject);
console.log("-----End of the Generic Function------");
//End of the Generic Function
