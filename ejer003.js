//Se quiere crear una función que reciba dos números y una operación (suma, resta, multiplicación, división)
// y devuelva el resultado de la operación entre los dos números.
function operarNumeros(a,b, operacion) {
    return a + b + operacion;
}

function operacionSumar(a,b) {
    return a +b;
}

function operacionRestar(a,b) {
    return a -b;
}

function operacionMultiplicar(a,b) {
    return a *b;
}

function operacionDividir(a,b) {
    return a /b;
}

console.log(operarNumeros(2,3,operacionSumar()))

