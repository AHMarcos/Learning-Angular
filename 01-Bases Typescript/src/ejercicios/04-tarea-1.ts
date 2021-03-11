interface Persona {
    nombre: string,
    edad: number,
    ocupacion: string,
    direccion: {
        pais: string,
        ciudad: string,
        provincia: string,
        calle: string        
    },
    mostrarDireccion: () => string;
}

const persona: Persona = {
    nombre: 'marcos',
    edad: 19,
    ocupacion: 'estudiante',
    direccion: {
        pais: 'PERÚ',
        ciudad: 'Lima',
        provincia: 'cañete',
        calle: 'malvinas'        
    },
    mostrarDireccion(){
        return this.nombre + ',' + this.direccion.pais + ',' + this.direccion.ciudad;
    }
}

const direccion = persona.mostrarDireccion();

console.log(direccion);
