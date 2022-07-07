//NO HABRá DECIMALES --------- parseInt() -- redondear ENTERO
//El operador es el primer signo no numérico seguido de un numero
//isNaN
//https://www.w3schools.com/jsref/jsref_obj_string.asp

//HECHO - evitar que se pueda escribir con el teclado en screen
//HECHO - que ponga casio por algún sitio

//operaciones correctas:
/*
    6-5 
    -6--5
    +600*+982
    -9/-99
    5/-9
*/

/*
    operaciones incorrectas
    *9
    /6+9
    6+/3
    **9/3
    *9+-6
    /9+/6
    3+5+6
    E
*/

//------------------------------------------------------------------------------

//escribe en la pantalla el valor que se le pase -------------------------------
let addScreen = (value) => {
  document.getElementById("screen").value += value;
};

//limpia la pantalla -----------------------------------------------------------
let clearScreen = () => {
  document.getElementById("screen").value = "";
};

//separa la operacion ----------------------------------------------------------
let separateOperation = (screen) => {
  let arrOperation = Array.from(screen);
  let arrOp = ["", "", ""];

  for (
    let i = 0, j = 0, encontrado = false, encontrado2 = false;
    i < arrOperation.length;
    i++
  ) {
    if ((i == 0 || !isNaN(arrOperation[i])) && !encontrado) {
      arrOp[0] += arrOperation[i];
    } else if (isNaN(arrOperation[i]) && i > 0 && !encontrado) {
      arrOp[1] = arrOperation[i];
      j = i + 1;
      encontrado = true;
    } else if (
      (arrOperation[j] == "+" ||
        arrOperation[j] == "-" ||
        !isNaN(arrOperation[i])) &&
      !encontrado2
    ) {
      arrOp[2] += arrOperation[i];
    } else {
      arrOp[2] = NaN;
      encontrado2 = true;
    }
  }

  return arrOp; // [value1, symbol, value2]
};

//operar numeros ---------------------------------------------------------------
let calculateNumbers = (screen) => {
  let arrOperation = separateOperation(screen);
  let value1 = arrOperation[0];
  let symbol = arrOperation[1];
  let value2 = arrOperation[2];
  let res;

  switch (symbol) {
    case "+":
      res = parseInt(value1) + parseInt(value2);
      break;
    case "-":
      res = parseInt(value1) - parseInt(value2);
      break;
    case "x":
      res = parseInt(value1) * parseInt(value2);
      break;
    case "/":
      res = parseInt(value1) / parseInt(value2);
      break;
  }

  return res;
};

//cálculo ----------------------------------------------------------------------
let calculate = () => {
  let operation = document.getElementById("screen").value;

  let result = Math.round(calculateNumbers(operation));

  if (isNaN(result)) {
    result = "E";
  }

  document.getElementById("screen").value = result;
};
