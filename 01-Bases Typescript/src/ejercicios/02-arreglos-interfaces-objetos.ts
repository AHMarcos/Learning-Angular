
let nombres: ['marcos','sebastian','freddy'];

interface Familia{
    hermanos: string[],
    sobrino: string,
    padres: string[],
    mascotas: number,
    casas?: number
}

const family: Familia = {
    hermanos: ['marcos','maria','fabi'],
    sobrino: 'sebastian',
    padres: ['freddy','faustina'],
    mascotas: 1
}

family.casas = 1;

console.log(family);
