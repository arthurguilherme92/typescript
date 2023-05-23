interface Person {
    name: string
};

interface Person {
    age: number
}

const Arthur: Person = {
    name: "Arthur Guilherme",
    age: 31
};

console.log(Arthur);

type Person2 = {
    name: string
};


const Guilherme: Person2 = {
    name: "Guilherme"
};

console.log(Guilherme);