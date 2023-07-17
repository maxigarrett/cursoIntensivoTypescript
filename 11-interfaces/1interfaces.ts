//las INTERFACES son similares a los TYPES pero con unas ligeras diferencias por ejemplo se pueden instanciar
//y es mejor antes de hacer uniontypes

//un alias de tipos(typealias) no se puede volver a abrir para agregar nuevas propiedades, mientras que una interfaz siempre
// es extensible. ademas que no se usa el = para declararlas
//❌una forma de extender interfaces que no se debe hacer de nombrar dos veces la misma interfaces
interface A {
  campo1: number;
  campo2: string;
}

interface A {
  campo3: number;
}

const a: A = {
  campo1: 1,
  campo2: "hola",
  campo3: 12,
};

//usamos una interface dentro de otra
interface Producto {
  id: number;
  nombre: string;
  precio: number;
  quantity: number;
}

interface CarritoDeCompras {
  totalPrice: number;
  productos: Producto[]; //le decimos que es una array de la interface producto
}

const carrito: CarritoDeCompras = {
  totalPrice: 2000,
  productos: [
    {
      id: 1,
      nombre: "tv",
      precio: 75000,
      quantity: 1,
    },
  ],
};
