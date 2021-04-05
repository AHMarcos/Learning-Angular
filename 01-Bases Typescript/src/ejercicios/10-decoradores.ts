

// DECORADORES

function reportableClassDecorator<T extends { new (...args: any[]): {} }>(constructor: T) {
    return class extends constructor {
      reportingURL = "http://www...";
    };
  }


@reportableClassDecorator
class miSuperClase {
    public miPropiedad: string = 'hola mundo';
    imprimir(){
        console.log('que fuee');
    }
}

console.log(miSuperClase);

const miClase = new miSuperClase();
console.log(miClase.miPropiedad);