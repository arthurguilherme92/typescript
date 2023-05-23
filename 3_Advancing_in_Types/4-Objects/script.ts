function passCoordinates(coord: {x: number, y: number} ) {
    console.log("The coordinate x is: ", coord.x);
    console.log("The coordinate y is: ", coord.y);
};

const objCoord = {x: 100, y: 82.4};
passCoordinates(objCoord);

const pessoaObg:{nome: string, surname: string} = {nome: "Arthur", surname: "Guilherme"};
console.log(pessoaObg);

//Optional Parameters
function passCoordinates2(m: number, n: number, o?: number) {
    console.log("M = ", m);
    console.log("N = ", n);
    console.log("O = ", o);
};

passCoordinates2(1, 3)