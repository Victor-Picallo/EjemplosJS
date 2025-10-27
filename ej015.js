//SET
let items = new Set()
items.add(1)
items.add(5)
items.add(5)//No se añade, lo ignora
items.add('Hola')

console.log(items.size)//3

items.has(1)//true
items.has(3)//false
items.delete(5)//true
items.clear()//vacia todo el set