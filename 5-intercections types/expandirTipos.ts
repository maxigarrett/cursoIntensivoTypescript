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

//INTERCECTION TYPES O EXPANCION
//unimos dos types diferentes a Heros4, es decir, lo estamos expandiendo o uniendo con otro
type Heros4 = HeroBasicInfo & HerosPropertys;

//los aprametros que necesitamos son solo name y age asi que solo le pasamos ese tipo y no el Heros4 entero con propiedades
//que no estamos usando en los aprametros, pero la funcion si devuelve el Heros4
const createHeros5 = (hero: HeroBasicInfo): Heros4 => {
  //destructuramos
  const { name, age } = hero;
  return { id: crypto.randomUUID(), name, age };
};

const thor5 = createHeros5({ name: "Thor", age: 1500 });
