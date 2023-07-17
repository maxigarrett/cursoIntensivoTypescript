//tanto el obj heros es el mismo que creamos con la funcion pero nosotros no sabemo si son los mismos
// ahi entra en juego los TYPE ALIAS
/*const heros = {
  name: "thor",
  power: 1500,
};
const createHeros = (name: string, power: number) => {
  return { name, power };
};

const thor = createHeros("thor", 1500);
*/

//TYPE ALIAS
//le decimos que vamos a tener un obj llamado heros que va a tener dos propiedades un name(string) y power(number)
//los type se definen en pascal case eje: PascalCase  cada nombre concatenado va en matyusculas
type Heros = {
  name: string;
  age: number;
};

const heros: Heros = {
  name: "thor",
  age: 1500,
};

//la funcion le decimos que devuelve nuestro tipo
//si cambiamos en el return algo que no este en el type que creamos dara error y nos avisa que esta mal
//podemos agregarlo al type o borrar lo demas en el return de la funcion
const createHeros = (name: string, age: number): Heros => {
  return { name, age };
};
// la variable thor ya infiere que es de tipo Heros porque la funcion devuelve ese tipo
const thor = createHeros("thor", 1500);

//OTRA FORMA DE PASARLE LOS PARAMETROS A LA FUNCIN CON TYPE
//para no pasarle lo mismo por parametro y sea muy repetitivo ponenmos un solo parametro y le agregamos el tipo
//que va a tener ese parametro
const createHeros2 = (hero: Heros): Heros => {
  //destructuramos
  const { name, age } = hero;
  return { name, age };
};
//como ahora espera un solo argumento le pasamos el obj que pide el type que declaramos
const thor2 = createHeros2({ name: "Thor", age: 1500 });

//--------------------------------------------OPTIONAL PROPERTIES------------------------------------------------------
type Heros2 = {
  readonly id?: number; //REDONLY para que sea de solo lectura y nadie lo pueda modificar por error
  name: string;
  age: number;
  isActive?: boolean; //con el '?' decimos que puede o no estar y si no esta no tirara ningun error porque es opcional. si sacamos el signo y no lo utilizamos dara error
};

//OTRA FORMA DE PASARLE LOS PARAMETROS A LA FUNCIN CON TYPE
//para no pasarle lo mismo por parametro y sea muy repetitivo ponenmos un solo parametro y le agregamos el tipo
//que va a tener ese parametro
const createHeros3 = (hero: Heros2): Heros2 => {
  //destructuramos
  const { name, age } = hero;
  return { name, age };
};
//como ahora espera un solo argumento le pasamos el obj que pide el type que declaramos
const thor3 = createHeros3({ name: "Thor", age: 1500 });
