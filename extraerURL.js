/*Crea una función llamada extraerURLs(texto) que reciba un texto y devuelva un array con todas las URLs 
que aparezcan en él. Las URLs pueden empezar por http://, https:// o incluso www.

Por ejemplo:

const texto = Visita nuestra web en https://www.cebem.net o en http://cebem.es. 
También tenemos recursos en www.aprendetu.com y en https://github.com/cebem.; console.log(extraerURLs(texto));

Debe devolver:

[ "https://www.cebem.net", "http://cebem.es", "www.aprendetu.com", "https://github.com/cebem" ]

🧠 Pistas

Una URL puede contener letras, números, puntos, guiones, /, ?, =, &…

Usa el modificador g para encontrar todas las coincidencias.

Usa grupos opcionales () y ? para admitir tanto http(s) como www.

El símbolo \S (mayúscula) sirve para “carácter no espacio”.*/

function extraerURLs(texto) {
    // Expresión regular para encontrar URLs
    const regex = /\b((https?:\/\/|www\.)\S+)\b/g;
    const coincidencias = texto.match(regex);
    return coincidencias || [];
}

const texto = `Visita nuestra web en https://www.cebem.net o en http://cebem.es.
También tenemos recursos en www.aprendetu.com y en https://github.com/cebem.; console.log(extraerURLs(texto));`;
const urls = extraerURLs(texto);
console.log(urls); 
// Debería devolver: [ "https://www.cebem.net", "http://cebem.es", "www.aprendetu.com", "https//github.com/cebem" "