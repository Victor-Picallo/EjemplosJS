function saludar(nombre, edad) {
    if (arguments.length === 0) {
        console.log("Hola!");
    } else if (arguments.length === 1) {
        console.log("Hola, " + nombre + "!");
    } else if (arguments.length === 2) {
        console.log("Hola, " + nombre + ", tienes " + edad + " años.");
    }
}

saludar("Ana", 25);