var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/* Typeof Type Guard*/
console.log("---Type Guard---");
function sum(a, b) {
    if (typeof a === "string" && typeof b === "string") {
        console.log("They are strings => ", parseFloat(a) + parseFloat(b));
    }
    else if (typeof a === "number" && typeof b === "number") {
        console.log("They are numbers => ", a + b);
    }
    else {
        console.log("Impossible to do the calc, verify your types!");
    }
    ;
}
;
sum("4", "8");
sum(7, 8);
sum("8", 4);
/* Checking if the value there is*/
console.log("---Value is there?---");
function operations(arr, operation) {
    if (operation === "sum") {
        var sum_1 = arr.reduce(function (i, total) { return i + total; });
        console.log(sum_1);
    }
    else if (operation === "multiply") {
        var multiply = arr.reduce(function (i, total) { return i * total; });
        console.log(multiply);
    }
    else {
        console.log("Plese, choose a operation!");
    }
    ;
}
;
operations([1, 4, 8]);
operations([1, 4, 8], "sum");
operations([1, 4, 8], "multiply");
// instanceOf
var User = /** @class */ (function () {
    function User(name) {
        this.name = name;
    }
    ;
    return User;
}());
;
var SuperUser = /** @class */ (function (_super) {
    __extends(SuperUser, _super);
    function SuperUser(name) {
        return _super.call(this, name) || this;
    }
    ;
    return SuperUser;
}(User));
;
var Arthur = new User("Arthur");
var Guilherme = new SuperUser("Guilherme");
console.log(Arthur);
console.log(Guilherme);
function getUser(user) {
    if (user instanceof SuperUser) {
        console.log("Hello ".concat(user.name, ", how are oyou doing today?"));
    }
    else if (user instanceof User) {
        console.log("Hello ".concat(user.name, "!"));
    }
    ;
}
getUser(Arthur);
getUser(Guilherme);
