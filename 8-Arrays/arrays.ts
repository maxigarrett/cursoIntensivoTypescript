//no nos dejaras hacer esto ya que por inferencia typescript detecta que lenguajes es de tipo never y nunca nos dejara
//cambiar de un array vacio
/*
❌const lenguajes= [];
❌lenguajes.push("javascript");
*/

//SOLUCION
//hay que tipar el array y se hace de dos formas y hacen las dos lo mismo
//1 PRIMER FORMA
const lenguajes: string[] = []; //le decimos que tiene que recibir un array de string al tiparlo de esta manera(: string[])
lenguajes.push("javascript");

//2 segunda FORMA
const lenguajes2: Array<string> = [];
lenguajes2.push("javascript");

//SI QUWREMOS AGREGAR A UN ARRAY DE STRING UN NUMERO
//le decimos que puede ser un array de tipo string como de tipo number o combinar ambos
const lenguajes3: (string | number)[] = [];
lenguajes3.push("javascript");
lenguajes3.push(1);

//-------------------------------------------------TIPAMOS ARRAY CON OBETOS------------------------------------
type HeroId = `${string}-${string}-${string}-${string}-${string}`;

type HeroPoweScale =
  | "local"
  | "planetary"
  | "galactic"
  | "universal"
  | "multiversal";

type HeroBasicInfo = {
  name: string;
  age: number;
};

type HerosPropertys = {
  readonly id?: HeroId;
  isActive?: boolean;
  powerScale?: HeroPoweScale;
};

const heros: HerosPropertys[] = [];

//creamos un obj con las propiedades del tipado que le dijimos. sino tipamos el obj dara error ya que espera un tipo de
//dato especifico que son el id,powerscale,etc
const firstHeroPropertys: HerosPropertys = {
  id: "123-123-123-123-123",
  isActive: true,
  powerScale: "galactic",
};

//lo metemos al array tipado de HerosPropertys
heros.push(firstHeroPropertys);
