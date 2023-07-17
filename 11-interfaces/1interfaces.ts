//las INTERFACES son similares a los TYPES pero con unas ligeras diferencias por ejemplo se pueden instanciar
//y es mejor antes de hacer uniontypes. tambien no se pueden usar tipos primitivos cono en las tuplas, para eso  si o si
//ahy que utilizar types, las interfaces es para definir una estructura mas compleja.

type CodigoId = `${number}-${string}`; //si declaramos una interface dara error porque pedira crear un obj

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
