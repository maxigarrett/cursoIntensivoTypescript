//como el crypto.randomUUID() crea un id de cadenas de string separadas por guiones, entonces creamos un tipo solo apra la id.
//lo que significa que creamos un type para pasarselos a otro type y si intentamos pasarle un string que no sea de tipo
//${string}-${string}-${string}-${string}-${string} typescript tirara error
type HeroId = `${string}-${string}-${string}-${string}-${string}`;
type Heros3 = {
  readonly id?: HeroId;
  name: string;
  age: number;
  isActive?: boolean;
};
const createHeros4 = (hero: Heros3): Heros3 => {
  //destructuramos
  const { name, age } = hero;
  return { id: crypto.randomUUID(), name, age };
};

const thor4 = createHeros4({ name: "Thor", age: 1500 });

//saber que guardaste anteriormente.Por ejemplo si tenemos muchas variables de colores hexadecimal y no sabemos si lo guardamos
// con # o sin # para ese creamos un tipo asi controlamos eso.
type HexadecimalColor = `#${string}`;

const white: HexadecimalColor = "#255";
