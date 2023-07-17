interface Producto3 {
  id: number;
  nombre: string;
  precio: number;
  quantity: number;
}

//cuando usemos esta interface ademas de tene la talla, al extender de Producto2 tendra sus propiedades tambien
interface Zapatilla2 extends Producto3 {
  talla: number;
}
interface CarritoDeCompras2 {
  totalPrice: number;
  productos: (Producto3 | Zapatilla2)[]; //podria ser de zapatilla para tener la talla o solo producto que es sin talla
}

//USAR INTERFACE CON FUNCIONES
//primera forma
interface CarritoOpcionts {
  addCart: (product: Zapatilla2) => void;
  removeCart: (id: number) => void;
  clrearCart: () => void;
}

//segunda forma
interface CarritoOpcionts2 {
  addCart(product: Zapatilla2): void;
  removeCart(id: number): void;
  clrearCart(): void;
}
