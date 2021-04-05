
interface Pasajero {
    nombre: string;
    hijos?: string[]
}

const pasajero1: Pasajero = {
    nombre: 'Marcos'
}

const pasajero2: Pasajero = {
    nombre: 'Pablo',
    hijos: ['lucas', 'steban', 'lila']
}

function imprimirHijos( pasajero: Pasajero): void {
    const cuantosHijos = pasajero.hijos?.length || 0;
    console.log(cuantosHijos);
}

imprimirHijos(pasajero2);