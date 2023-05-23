function advancedGreetings(firstName: string, lastName?: string) {
    if(lastName !== undefined) {
        return `Hello ${firstName} ${lastName}, how are you doing today?`;
    };
    return `Hello ${firstName}, how are you doing today?`;
};

console.log(advancedGreetings("Arthur"));
console.log(advancedGreetings("Arthur", "guilherme"));