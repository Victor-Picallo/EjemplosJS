let regex= /cebem/
let text= "Estamos en cebem s1"

let result= regex.test(text)
console.log(result) 

regex= /cebem/
text= "Me gusta Cebem"
result= regex.test(text)
console.log(result)

regex= /cebem/
text= "Me gusta cebem"
const nuevoTexto= text.replace(regex, "David")
console.log(nuevoTexto)

regex= /p.ta/
console.log(regex.test('pota'))  // true

// \d : cualquier numero 0-9
regex= /3\d5/
console.log(regex.test('305'))  // true
console.log(regex.test('3a5'))  // false

// /w : cualquier letra o numero
regex= /3\w5/
console.log(regex.test('305'))  // true
console.log(regex.test('3M5'))  // true
console.log(regex.test('3ñ5'))  // false
console.log(regex.test('3#5'))  // false

// \s : espacio en blanco
regex= /3\s5/
console.log(regex.test('3 5'))  // true
console.log(regex.test('3l5'))  // false

// + <- el caracter anterior(o el conjunto) puede aparecer 1 o mas veces , una como minimo
regex= /3a+5/
console.log(regex.test('3ba'))  // false
console.log(regex.test('3a5'))  // true
console.log(regex.test('3aaaa5'))  // true

// * <- el caracter anterior(o el conjunto) puede aparecer 0 o mas veces
regex= /3a*5/
console.log(regex.test('3ba'))  // false
console.log(regex.test('3a5'))  // true
console.log(regex.test('3aaaa5'))  // true
console.log(regex.test('35'))  // true

// \ <- escape
regex = /3\.5/
console.log(regex.test('3.5'))
console.log(regex.test('3M5'))

// ^ <- comienza por
regex= /^cebem/
console.log(regex.test('Me gusta cebem'))
console.log(regex.test('cebem me gusta'))

//$ <-termina por
regex= /cebem$/
console.log(regex.test('Me gusta cebem'))
console.log(regex.test('cebem me gusta'))