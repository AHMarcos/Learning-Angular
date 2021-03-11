

function plus(one: number, two: number):number {
    return one + two;
}

const plusFlecha = (one: number, two: number): number => {
    return one + two;
}

function multiply( numero: number, opcional?: number, otroNumero = 8): number{
   return numero * otroNumero;
}


const result = multiply(2,10,3);

console.log(result);


// FUNCIONES + OBJETOS


interface Personaje {
    name: string,
    puntosVida: number
}

function curar(personaje: Personaje, curarPV: number): void {
    personaje.puntosVida = personaje.puntosVida + curarPV;      // es igual a  personaje.puntosVida+= curarPV
    console.log(personaje);
    
}

const newPersonaje: Personaje = {
    name: 'Spiderman',
    puntosVida: 100
}

curar(newPersonaje, 20)
