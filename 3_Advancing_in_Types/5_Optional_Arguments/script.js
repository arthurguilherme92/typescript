function advancedGreetings(firstName, lastName) {
    if (lastName !== undefined) {
        return "Hello ".concat(firstName, " ").concat(lastName, ", how are you doing today?");
    }
    ;
    return "Hello ".concat(firstName, ", how are you doing today?");
}
;
console.log(advancedGreetings("Arthur"));
console.log(advancedGreetings("Arthur", "guilherme"));
