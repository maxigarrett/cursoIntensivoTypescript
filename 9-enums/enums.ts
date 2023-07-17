//Los enum se pueden utilizar apra una coleccion de datos finita, es decir, para usar enum tiene que usarse por ejemplo
//en unos datos de 5,15,20 a lo sumo de grande para enumerar
//casos de usar estos enum: dias de la semana, tipos de errores,tipos de viviendas que tendraimos en una APP,etc

// se puede escribir con const para que no genere tanto codigo JS
/*
const enum ERROR_TYPES {
    NOT_FOUND,
    UNAUTHORIZED,
    FORBIDDEN,
  }
*/

// se le puede asignar un valor tambien a cada uno. Pero si se inisializa uno se tiene que poner en todos
//se pude o no usar const tambien
/*
const enum ERROR_TYPES {
    NOT_FOUND='notFound',
    UNAUTHORIZED='unauthorized',
    FORBIDDEN='forbidden',
  }
*/
enum ERROR_TYPES {
  NOT_FOUND,
  UNAUTHORIZED,
  FORBIDDEN,
}
const showMessages = (errorMessages: ERROR_TYPES) => {
  if (errorMessages === ERROR_TYPES.NOT_FOUND) {
    console.log("no se encuentra el recurso");
  }
  if (errorMessages === ERROR_TYPES.UNAUTHORIZED) {
    console.log("no tienes permiso para acceder");
  }
  if (errorMessages === ERROR_TYPES.FORBIDDEN) {
    console.log("no tienes permiso para acceder");
  }
};

//NOTA el const lo ultilizamo si no vamos hacer un biblioteca o que se consuma de terceros. Si solo va estar
//en la App. Pero si es lo contrario no utilizar const
