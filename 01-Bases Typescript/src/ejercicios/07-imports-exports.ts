import { Producto, calcularISV } from './05-desestructuracion-basica';


// /*
//     ===== Código de TypeScript =====
// */

const carritoCompras: Producto[] = [
    {
        desc: 'samsung',
        precio: 100
    },
    {
        desc: 'iphone',
        precio: 150
    }
];

const [total, isv] = calcularISV( carritoCompras );

console.log('Total:', total);
console.log('ISV :', isv);
