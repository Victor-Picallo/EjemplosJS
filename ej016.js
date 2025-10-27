//Maps
let myMap = new Map()
myMap.set('nombre', 'Pepe')
myMap.set('edad', 30)

console.log(myMap.get(edad))//30
console.log(myMap.size)//2
myMap.delete('nombre')//borra nombre
myMap.has('nombre')//busca nombre, false
myMap.clear()//limpia el mapa entero
