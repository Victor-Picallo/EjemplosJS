function saludar(nombre = "Visitante", edad) {
    if (edad) {
        console.log("Hola, " + nombre + ", tienes " + edad + " años.");
    } else {
        console.log("Hola, " + nombre + "!");
    }
}

saludar();