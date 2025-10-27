const readLine = require('readline')
const rl = readLine.createInterface({
    input: process.stdin, //Entrada estandar TECLADO
    output: process.stdout //Salida estandar MONITOR
})


rl.question('Dame un numero: ', function trabajarConElNumero(num){
    console.log('El numero es: ' + num)
    rl.close();
})