//Crea una clase llamada TrafficLight
//Añade los atributos que necesites
//Añade los metodos: cambiar y mostrarEstado
//cambiar pasara al siguiente color
//mostrarEstado mostrara el color actual del semaforo

class TrafficLight {
    constructor(color) {
        //let color = "verde" asi es publico
        this.color = color; //asi es privado
    };

     nextState() {
        if (this.color === "red") {
            return this.color = "green";
        } else if (this.color === "green"){
            return this.color = "yellow";
        } else {
            return this.color = "red";
        }
    };

     showState() {
        return console.log(`El color actual es: ${this.color}`)
    };
}

let semaforo = new TrafficLight("red");
semaforo.showState();
semaforo.nextState();
semaforo.showState();