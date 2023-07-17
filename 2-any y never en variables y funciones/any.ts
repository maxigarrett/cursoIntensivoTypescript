// ANY LE DIVE A UNA VARIABLE O FUNCION QUE ACEPTE TODO. SE UTULIZA YA DE ULTIMO RECURSO

//se le puede asignar cualquier cosa por lo tanto typescript pierde el significado al usar ANY
let obj: any = { x: 0 };
obj.foo();
obj = "hola";

//------------------------------------ANY EN FUNCIONES----------------------------------------

/*sin tipar nada typescript nos avisa que name es de tipo any por lo tanto tenes que tipar el aprametro sino
le podremos pasar cualquier cosa a la funcion y eso no es lo que queremos. solo queremos un string:

const saludar = (name) => {
  console.log(`hola ${name}`);
};

*/

const saludar = (name: string) => {
  console.log(`hola ${name}`);
};
saludar("pepe");
// ❌ saludar(2) dara error ahora solo admite STRING

//---------obj en parametros funciones --------------------------
//si le pasamos un obj por aprametros a una funcin y no tipamos tambien le podemos pasar cualquier cosa
// y no se quejara para nada typescript

// ❌const saludar2 = ({ name, age }) => {
//   console.log(`hola ${name} tu edad es ${age}`);
// };

// MAL FORMA DE TIPAR
/*IMPORTANTE -> aca no se tipa con ':' por que lo que estamos haciendo es cambiandole el nombre a los aprametros 
const saludar2 = ({ name :string, age:number }) => {
  console.log(`hola ${name} tu edad es ${age}`);
};
*/

// DOS FORMAS CORRECTAS DE TIPAR
//primera forma
const saludar2 = ({ name, age }: { name: string; age: number }) => {
  console.log(`hola ${name} tu edad es ${age}`);
};
//segunda forma
const saludar3 = (persona: { name: string; age: number }) => {
  const { name, age } = persona; //destructurar
  console.log(`hola ${name} tu edad es ${age}`);
};

//------------FUNCIONES COMO PARAMETROS-------
// esto sin tipar esta plagado de any
/*const sayHiFromFunction = (fn) => {
    return fn("pepe");
};

const sayHi=(name:string)=>console.log(`hola${name}`)

sayHiFromFunction(sayHi);*/

//ARREGLAMOS LOS ANY
//arreglamos tipando funciones como parametro
// ponesmos VOID cuando no hay un return en la funcion
//fn: (nombre: string) => void   -> esto indica que 'fn' es una funcion y recive un parametro llamodo 'name' que es
//un 'string' y devuelve void
const sayHiFromFunction = (fn: (nombre: string) => void) => {
  return fn("pepe");
};

const sayHi = (name: string) => {
  console.log(`hola${name}`);
};

sayHiFromFunction(sayHi);
//---------TERMINA FUNCIONES COMO PARAMETROS-------

//--------------------------------------------TERMINA ANY EN FUNCIONES-----------------------------------------------------

//-------------------------------------------FORMAS DE TIPAR FUNCIONES---------------------------------------------------
//1-tipamos la funcion
const sumar = (a: number, b: number): number => {
  return a + b;
};

//2- le decimos de que tipo va a ser la funcion a la variable y lo que devuelve y despues escribimos la funcion
const restar: (a: number, b: number) => number = (a, b) => {
  return a + b;
};
//-----------------------------------------FIN FORMAS DE TIPAR FUNCIONES--------------------------------------------------

//---------------------------------------------NEVER NE FUNCIONES-------------------------------------------------------

//si le ponemos NEVER le indicamos a la funcion que jamas va a devolver anda porque solo es una funcion que tira error
const throwError = (message: string): never => {
  throw new Error(message);
};
//-------------------------------------------FIN NEVER NE FUNCIONES-------------------------------------------------------
