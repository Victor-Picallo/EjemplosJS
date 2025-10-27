//maps NO guardan los resultados
let arr2 = [2, 7, 1]

function doblar(num) {
    return num * 2
}

function cuadrado(num) {
    return num * num
}

arr2.map(doblar); // 4,14,2
arr2.map(function cuadrado(num) { // 16,49,1 OJO! Asi es como se suelen encontrar las funciones
    return num * num
});

function esPar(num) {
    return num % 2 === 0
}

let positivos = arr2.filter(esPar) // 2

arr2.join('::') // Esto devuelve '2::7::1'

let newArray = '2,7,1'.split(',') // Devuelve [2,7,1]

//Para modificar objetos, arrays...
arr2.push(10) //Modifica el array original añadiendo el elemento por el final
arr2.pop() //Modifica el array original eliminando el elemento del final. ADEMAS te lo devuelve
arr2.unshift(20) //Modifica el array original añadiendo el elemente por el inicio
arr2.shift() // Modifica el array original eliminando el elemeno del inicio. ADEMAS te lo devuelve
arr2.splice(0, 2) // Elimina 2 elemento a partir de la posicion dada
arr2.slice() // Devuelve los datos desde la posicion dada exceptuando la ultima que NUNCA la coge

//Crea un Array:
//- Numeros del 1 al 10
let myData = []
for (let i = 1; i <= 10; i++) {
    myData.push(i)
}
//- Una funcion que reciba un numero y diga si es positivo o negativo
myData.push(function (num) {
    return num >= 0
})

//- Un objeto que represente un producto
myData.push({
    nombre: 'CocaCola',
    precio: 1.5,
    stock: 20
})

//- Un booleano
myData.push(true)
//- Usa el array
console.log(myData)
//- Muestra el primer elemento del array
console.log(myData[0])
//- Ejecuta la funcion que hay en el array
myData[10](9)
//- Muestra el nombre del producto
myData[11](10)
//- Añade al principio el numero 0
myData.unshift(0)
//- Añade al final el booleano contrario al inicial
myData.push(!myData[12])
//- Muestra la longitud del array
console.log(myData.length)
//Funcion pura
function isBoolean(elem) {
    return typeof (elem) === 'boolean'
}
//Usa el filtro
console.log(myData.filter(isBoolean).length)


arr3 = [2,7,1]
function sumar(a,b){
    return a +b
}
let valor = arr3.reduce()
console.log(sumar(arr3))
