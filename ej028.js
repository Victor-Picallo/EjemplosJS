const edificio = {
    altura: 10,
    plantas: 3,
    calle: 'Hispanidad'
}

//Pasa de un objeto a JSON
const edificioEnJson = JSON.stringify(edificio)

//Pasa de un JSON a objeto
const myFormularioJSON = "xxx"
const myFormularioObjeto = JSON.parse(myFormularioJSON)