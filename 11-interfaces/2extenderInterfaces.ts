//-----------------------------------------------EXTENDER INTERFACES-----------------------------------------
interface Producto2 {
  id: number;
  nombre: string;
  precio: number;
  quantity: number;
}

//cuando usemos esta interface ademas de tene la talla, al extender de Producto2 tendra sus propiedades tambien
interface Zapatilla extends Producto2 {
  talla: number;
}
interface CarritoDeCompras2 {
  totalPrice: number;
  productos: (Producto2 | Zapatilla)[]; //podria ser de zapatilla para tener la talla o solo producto que es sin talla
}

const carrito2: CarritoDeCompras2 = {
  totalPrice: 2000,
  productos: [
    {
      id: 1,
      nombre: "tv",
      precio: 75000,
      quantity: 1,
      talla: 43, //nos pedira esta propiedad tambien asi que por eso la pusimos
    },
  ],
};
