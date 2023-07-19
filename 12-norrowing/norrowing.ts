//NORROWING es como hacer un filtro y perdiendo los tipos que no queremos controlar ej:
const mostrarLongitud = (objeto: number | string) => {
  if (typeof objeto === "string") {
    //sin el if no podriamos usar el length ya que por parametro tambien puede venir un tipo number.
    return objeto.length;
  }

  //pero fuera del string lo toma como number
  return objeto.toString().length;
};

//--------------------------------------------EJEMPLO CON INTERFACES
interface Mario {
  company: "Nintendo";
  nombre: string;
  saltar: () => void;
}
interface Sonic {
  company: "Sega";
  nombre: string;
  correr: () => void;
}

type Personaje = Mario | Sonic;

const jugar = (personaje: Personaje) => {
  //le hacemos inferir que es de type mario
  if (personaje.company === "Nintendo") return personaje.saltar();
};

//------------------------------------SI LA INTERFACE NO TUVIERA COMPANY PARA DISTINGUIRLAS CON TYPE GUARD------------------

interface Mario2 {
  nombre: string;
  saltar: () => void;
}
interface Sonic2 {
  nombre: string;
  correr: () => void;
}

type Personaje2 = Mario2 | Sonic2;

// type guard se asegura de que lo que recive como argumento sea un Personaje2 y retorne que la proiedad de la interface
//Sonyc2 correr() sea distinto a undefinend osea que exista
//esta funcion determina si es sonic o no
const checkIsSonic = (personaje: Personaje2): personaje is Sonic2 => {
  return (personaje as Sonic2).correr !== undefined;
};

const jugar2 = (personaje: Personaje2) => {
  //si queremos ver la propiedad saltar dara error porque mario la tiene pero sonic no por eso hay que asegurarse
  //de que queremos el tipo correcto creando una funcion aparte
  if (checkIsSonic(personaje)) {
    personaje.correr();
  }
};

//le pasamos lo que pide la interface un string y una funcion
const correr = () => {};
jugar2({ nombre: "nombre", correr });

//NOTA: SIEMPRE EVITAR LOS TYPE GUAR MUY VERBOSOS
