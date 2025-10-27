// =  ==  ===

// = Asignacion
// == Comparacion Valor
// === Comparacion estricta Valor y Tipo

let a = 10
let b = new Number(10)
let c = new Number(10)
let d = a
let e = 10
let f = b

console.log(a == b)//true
console.log(a === b)//false

console.log(a == d)//true
console.log(a === d)//true

console.log(a == e)//true
console.log(a === e)//true

console.log(b == c)//false
console.log(b === c)//false

console.log(b == f)//true
console.log(b === f)//true

const alum1 = {
    nombre: 'Pepe',
    edad: 22
}
const alum2 = {
    nombre: 'Pepa',
    edad: 25
}
const alum3 = {
    nombre: 'Pepe',
    edad: 22
}

console.log(alum1 == alum2)//false
console.log(alum1 === alum2)//false
console.log(alum1 === alum3)//false