// 1 DESESTRUCTURACION DE OBJETOS
interface Reproductor {
    volumen: number,
    segundo: number,
    cancion: string,
    detalles: Detalles
}

interface Detalles {
    artista: string,
    fechaLanzamiento: number
}

const reproductor: Reproductor = {
    volumen: 100,
    segundo: 50,
    cancion: 'highest in the room',
    detalles: {
        artista: 'travis scott',
        fechaLanzamiento: 2019
    }    
}

const {volumen, segundo, cancion, detalles} = reproductor;
const {artista} = detalles;

// console.log('La cancion es: ', cancion);
// console.log('El artista es: ', artista);




// 2 DESESTRUCTURACION DE ARREGLOS
const mugiwaras = ['luffy','zoro','sanji','brook','robin','franky','nami','chooper','jinbe']
const [ , , , huesos] = mugiwaras;

//console.log('tripulante 4 :', huesos);




// 3 DESESTRUCTURACION DE ARGUMENTOS
export interface Producto {
    desc: string,
    precio: number
}

const telefono: Producto = {
    desc: 'iphone 11',
    precio: 150
}

const laptop: Producto = {
    desc: 'macBook',
    precio: 350
}

export function calcularISV (producto: Producto[]): [number,number] {

    let total = 0;

    producto.forEach( ({precio}) =>  {
        total = total + precio;
    })

    return [total, total * 0.15];   

}

const articulos = [telefono, laptop];
const [total, isv] = calcularISV(articulos);

console.log('TOTAL :', total);
console.log('ISV :', isv);