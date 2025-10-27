/*Crea una función llamada extraerFechas(texto) que reciba un texto y devuelva un array con todas las fechas encontradas en formato:

dd/mm/aaaa

dd-mm-aaaa

aaaa-mm-dd

aaaa/mm/dd

Por ejemplo:

const texto = ` Eventos:

Examen: 12/11/2024
Vacaciones: 2025-07-14
Reunión: 01-02-2023 `; console.log(extraerFechas(texto));
Debe devolver: ["12/11/2024", "2025-07-14", "01-02-2023"]*/

function extraerFechas(texto) {
    // Expresión regular para encontrar fechas en los formatos especificados
    const regex = /\b(\d{2}[\/-]\d{2}[\/-]\d{4}|\d{4}[\/-]\d{2}[\/-]\d{2})\b/g;
    const coincidencias = texto.match(regex);
    return coincidencias || [];
}

const coincidencias = extraerFechas(` Eventos:
Examen: 12/11/2024
Vacaciones: 2025-07-14
Reunión: 01-02-2023 `);
console.log(coincidencias); // Debería devolver: ["12/11/2024", "2025-07-14", "01-02-2023"]