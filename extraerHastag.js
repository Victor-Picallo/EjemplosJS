/*Crea una función en JavaScript llamada extraerHashtags(texto) que reciba una cadena de texto y 
devuelva un array con todos los hashtags que aparezcan en ella (sin el símbolo #).

Por ejemplo: console.log(extraerHashtags("Hoy estudiamos #regex en #JavaScript y #aprendemos mucho!"));

debería devolver: ["regex", "JavaScript", "aprendemos"]*/

function extraerHashtags(texto) {
    // Expresión regular para encontrar hashtags
    const regex = /#([\wñÑáéíóúÁÉÍÓÚ]+)/g;
    const coincidencias = texto.match(regex)
    const lista = coincidencias ? coincidencias.map(tag => tag.slice(1)) : [];

    // Esto se hace para eliminar duplicados
    const miSet = new Set(lista)
    return [...miSet]
}

const hastag = extraerHashtags("Hoy estudiamos #regex en #JavaScript y #aprendemos mucho #regex!");
console.log(hastag); // Debería devolver: ["regex", "JavaScript", "aprendemos"]