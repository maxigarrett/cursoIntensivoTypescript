//------------------------------------------------------TIPOS CON TUPLAS---------------------------------------------
/*
[
    ['x','o','x'],
    ['o','x','o'],
    ['o','','x']

]
*/
//creamos un tipo para que no se pueda poner nada mas que los valor predeterminados que establecemos en el tipo
type CellValues = "x" | "o" | "";

//ahora para que no se expanda mas de lo que queremos le indicamos que va a ser un '3 x 3'. sin hacer esto
//hubiesemos expandido el array hasta donde queriamos y asi no es el juego
type GameBoard = [
  [CellValues, CellValues, CellValues],
  [CellValues, CellValues, CellValues],
  [CellValues, CellValues, CellValues]
];
//tipamos con el arraya de arrays
const gameboard: GameBoard = [
  ["x", "o", "x"],
  ["o", "x", "o"],
  ["o", "o", "x"],
];

// gameboard[0][1]='asdasd' esto dara error tambien solo acepta 'x','o',''

//para hacer un color rgb
//pero typescript tiene un bug que si a esta tupla le hacemos un push nos dejara que sea de 4 y no de 3
//por eso vamos a ponerle redonly asy no se puede modificar
type RGB = readonly [number, number, number];
const black: RGB = [0, 0, 0];

// black.push(4)esto dara error ya que el typo es de solo lectura
