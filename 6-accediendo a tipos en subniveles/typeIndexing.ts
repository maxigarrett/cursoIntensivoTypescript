//creamos un type con subniveles
type HeroProperties = {
  isActive: boolean;
  address: {
    planet: string;
    city: string;
  };
};

//type indexing accedemos a los subtipos como si quisieramos acceder a un subnivel de un objeto normal
const heroAddres: HeroProperties["address"] = {
  planet: "tierra",
  city: "bsas",
};
