//utilizamos para la asercion de tipos 'AS' es como obligar a typescript que trate a algo como el tipo nosotros queremos

//como typescript no sabe si la const canvas es de tipo camvas utilizamos 'AS' para indicarle que va hacer
//de tipo HTMLCanvasElement es decir de canvas(es una etiqueta html que sirve para dibujar)
const canvas = document.getElementById("canvas") as HTMLCanvasElement;

if (canvas !== null) {
  const cnv = canvas.getContext("2d");
}

//-------------------------------------------------OTRA MEJOR FORMA SERIA----------------------------------
//asegurarnos de que primero no sea null y despues le asignamos el tipo
const canvas2 = document.getElementById("canvas");

// pero si recuperamos algo que no sea el canvas
//typescript no se dara cuenta por eso nos tenemos que asegurar de que sea una instancia de canvas y nos evitamos usar
//asercion
if (canvas2 instanceof HTMLCanvasElement) {
  //   const cnv = (canvas as HTMLCanvasElement).getContext("2d");
  const cnv = canvas.getContext("2d"); //typescript hace inferencia no hace falta la asercion (as)
}
