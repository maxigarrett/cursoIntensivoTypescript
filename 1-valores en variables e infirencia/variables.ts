//typecript ya sin tipar nada sabe que no podemos cambiarle al valor a una variable que ya fue asignada
let nombre = "maxi"; //string
// ❌ nombre = 1;    //number

//---------------------------------------------------------ANOTACIONES DE TIPO----------------------------------------
// para indicar un tipo primitivo a una variable usamos las denominadas 'ANOTACIONES DE TIPO' que son los ':' despues de nombrar
//la variable
let nombre2: string = "maxi";
let numero: number = 1;
let bulean: boolean = false;

//en la funciones con parametros typescrip no puede inferir de que tipo son esos parametros porque podemos pasarle dos string
//y la funcion los concatenaria, aunque nosotros pensemos que suma dos numeros
const funcion = (a, b) => {
  return a + b;
};

//le indicamos con ':' y 'tipo de dato a recibir', para indicarle algun tipo primitivo a los parametros de la funcions
//el return ya infiere que devuelve un number en el return ya que por los aprametros le indicamo que devolver
const funcion2 = (a: number, b: number) => {
  return a + b;
};

//INDICAR QUE DATO DEVUELVE LA FUNCION
//indicarle lo que devuelve la funcion se hace despues de los aprenttecis con ':' pero en este caso no hace falta ya que lo infiere typescript
const funcion3 = (a: number, b: number): number => {
  return a + b;
};

//---------------------------------------------INFERENCIA--------------------------------
//sin tipara typescript se da cuenta o infiere que la variable PERSONA es un objeto que sus valores y eso lo sabemos
//al pasarle el mause por ensima de la variable muestra uss datos.
const persona = { name: "pepe", edad: 32 };

//la variable C ya typescript infiere que es de valor number no hace falta tiparlo tambien va para la variable A y B
const a = 1;
const b = 2;
const c = a + b;

//INFERENCIA EN FUNCIONES ANONIMAS
const avengers = ["hulk", "ironman", "thor", "pepe"];
//la funcion anonima que ejecuta el foreach infiere por contexto que es de string si le pasamos el mause
//por encima mostrara esto:  (parameter) avenger: string
avengers.forEach((avenger) => console.log(avenger));

// NOTA : SIEMPRE EVITAR ESCRIBIR LOS MENOS TYPOS POSIBLES. SI YA LO INFIERE NO HACE FALTA ESCRIBIRLE EL TIPO
