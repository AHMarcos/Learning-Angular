// /*
//     ===== Código de TypeScript =====
// */

// 01 CLASES  

class heroe {
    nameHeroe: string;
    nameReal: string;
    edad: number   
    imprimirInfo(){
        return this.nameHeroe + ' ' + this.nameReal;
    }
}

const iroman = new heroe();
// console.log(iroman); 


// 02 CLASES + CONSTRUCTOR

class heroe2 {
    // nameHeroe: string;
    // nameReal: string;
    // edad: number  
    constructor(
        public nameHeroe: string,
        public nameReal: string,
        public edad: number  
    ){}     
}

const capAmerica = new heroe2('Capitan america','roger', 80);
console.log(capAmerica);


// 03 EXTENDER UNA CLASE

