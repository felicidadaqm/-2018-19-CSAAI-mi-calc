function main() {
  console.log("Que comiencen los juegos de JS");

  var numeros = []
  var operando = ""
  var boton1 = document.getElementById("boton1");
  var boton2 = document.getElementById("boton2");
  var boton3 = document.getElementById("boton3");
  var botonsum = document.getElementById("suma");
  var botonequal = document.getElementById("igual");


  boton1.onclick = () => {
    console.log("Click");
    operando = operando + "1";

    var display = document.getElementById("display");
    display.innerHTML = operando
  }

  boton2.onclick = () => {
    console.log("Click2");
    operando = operando + "2";

    var display = document.getElementById("display");
    display.innerHTML = operando
  }

  boton3.onclick = () => {
    console.log("Click3");
    operando = operando + "3";

    var display = document.getElementById("display");
    display.innerHTML = operando
  }

  botonsum.onclick = () => {
    console.log("Suma");
    operando =  operando + "+";
    var display = document.getElementById("display");
    display.innerHTML = operando;

  }

  botonequal.onclick = () => {
    console.log("Igual");
    numeros.push(operando);
    var display = document.getElementById("display");
    console.log(numeros)
  }
}
