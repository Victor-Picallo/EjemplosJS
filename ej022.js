function myFunction() {
    console.log(arguments)
}

myFunction(2,4,5)


//REST
function sumar(...n) {
    let total = 0;
    for(let i= 0; i<n.length; i++){
        total += n[i]
    }
    return total
}

console.log(sumar(5,8,-1))

//MEJORADO
function sumar2(...n) {
    return n.reduce((a,b) => a+b)
}

//MEJORADO
