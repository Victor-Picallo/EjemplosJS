//Pasalo a LAMDA
function fullName(name, surname){
    return name + " " + surname;
}

const fullName2 = (name, surname) => `${name} ${surname}`;

function calculator(a,b,operator) {
    if(operator==="suma") return a+b;
    if(operator==="resta") return a-b;
    return 0;
}

const calculator2 = (a,b,operator) => {
    if(operator==="suma") return a+b;
    if(operator==="resta") return a-b;
    return 0;
}

const operations = {
    suma: (a,b) => a + b,
    resta: (a,b) => a - b,
    division: (a,b) => b!==0 ? a/b : "Error"
}

const calculator3 = (a,b,operation) => operations[operation] ? operations[operation](a,b) : "Error";

function greets(){
    return 'Hola!!'
}

const greets2 = () => 'Hola!!!'

function printGreets(){
    console.log('Holaa!!')
}

const printGreets2 = () => console.log('Holaa!!')

function personCreator(name, age){
    return {
        name: name,
        age: age,
        gender: male,
        state: single
    }
}

const personCreator2 = (name, age) => ({
    name: name,
    age: age,
    gender: male,
    state: single
})