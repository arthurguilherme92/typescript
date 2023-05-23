function passCoordinates(coord) {
    console.log("The coordinate x is: ", coord.x);
    console.log("The coordinate y is: ", coord.y);
}
;
var objCoord = { x: 100, y: 82.4 };
passCoordinates(objCoord);
var pessoaObg = { nome: "Arthur", surname: "Guilherme" };
console.log(pessoaObg);
//Optional Parameters
function passCoordinates2(m, n, o) {
    console.log("M = ", m);
    console.log("N = ", n);
    console.log("O = ", o);
}
;
passCoordinates2(1, 3);
