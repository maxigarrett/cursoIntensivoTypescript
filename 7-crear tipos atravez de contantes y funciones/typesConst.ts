//CREAR TIPOS ATRAVEZ DE CONTANTES

//objeto normal
const address = {
  planet: "marte",
  city: "algunLugar",
};

//con typeof sacamos el tipo del objeto (address) y se lo asignamos a el tipo(AddressLocation)
type AddressLocation = typeof address;

const myLocation: AddressLocation = {
  planet: "",
  city: "",
};

//TIPOS ATRAVEZ DE FUNCIONES
const createAddres = () => {
  return {
    planet: "tierra",
    city: "corrientes",
  };
};

//creamos el tipo a travez de lo que retorna la funcion con "ReturnType<typeof unafuncion>"
type AddressLocationFromFunction = ReturnType<typeof createAddres>;

//ahora la funcion tendra que devolver el tipo que le pasamos city y planet
const createAddres2 = (): AddressLocation => {
  return {
    planet: "asdasd",
    city: "asdasd",
  };
};
