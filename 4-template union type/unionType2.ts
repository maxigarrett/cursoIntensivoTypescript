type HeroId1 = `${string}-${string}-${string}-${string}-${string}`;

//en los types no solo podemos poner el tipo(string,number,boolean) sino tambien valores como numeros o texto,obj,etc
type HeroPoweScale =
  | "local"
  | "planetary"
  | "galactic"
  | "universal"
  | "multiversal";

//se puede asiganr un tipo y un numero en concreto all type number
const AnimationDuration: boolean | number = 200;

type Heros4 = {
  readonly id?: HeroId;
  name: string;
  age: number;
  isActive?: boolean;
  powerScale?: HeroPoweScale;
};
const createHeros5 = (hero: Heros4): Heros4 => {
  //destructuramos
  const { name, age } = hero;
  return { id: crypto.randomUUID(), name, age };
};

const thor5 = createHeros5({ name: "Thor", age: 1500 });
thor5.powerScale = "planetary";
