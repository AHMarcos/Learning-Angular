//NOTA
// Con las clases puedes definir a los tributos si son de tipo private, public o static
// private: que solo ese atributo va ser visible dentro de esa clase.
// public:  que fuera de la clase esta visible
// static:  que se puede acceder al valor del atributo sin crear una instancia de la clase    


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

class heroes {
    // nameHeroe: string;
    // nameReal: string;
    // edad: number  
    constructor(
        public nameHeroe: string,
        public nameReal: string,
        public edad: number  
    ){}     
}

const capAmerica = new heroes('Capitan america','roger', 80);
// console.log(capAmerica);


// 03 EXTENDER UNA CLASE

class personaNormal {
    constructor(
        public nombre:string, 
        public direccion:string
    )   {}
}


class superHeroes extends personaNormal{
    constructor(
        public nameHeroe: string,
        public nameReal: string,
        public edad: number  
    ){
        super(nameReal, 'New york, USA');
    } 
}

const tonyStark = new superHeroes('Iroman','tony', 80);
console.log(tonyStark);