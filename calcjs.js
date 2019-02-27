function main() {
  console.log("Que comiencen los juegos de JS");

  var operation_arr = [];
  var num = "";
  var operation = "";
  var showdisplay = "";
  var boton1 = document.getElementById("1");
  var boton2 = document.getElementById("2");
  var boton3 = document.getElementById("3");
  var boton4 = document.getElementById("4");
  var boton5 = document.getElementById("5");
  var boton6 = document.getElementById("6");
  var boton7 = document.getElementById("7");
  var boton8 = document.getElementById("8");
  var boton9 = document.getElementById("9");
  var boton0 = document.getElementById("0");

  var suma = document.getElementById("+");
  var resta = document.getElementById("-");
  var mult = document.getElementById("*");
  var divi = document.getElementById("/");
  var botonequal = document.getElementById("=");
  var dec = document.getElementById(".");


  boton1.onclick = () => {
    console.log("Click");
    var valor = document.getElementById("1").value;
    var display = document.getElementById("display");
    num = num + valor
    display.innerHTML = (showdisplay = showdisplay + valor);
  }

  boton2.onclick = () => {
    console.log("Click2");
    var valor = document.getElementById("2").value;
    var display = document.getElementById("display");
    num = num + valor
    display.innerHTML = (showdisplay = showdisplay + valor);
  }

  boton3.onclick = () => {
    console.log("Click3");
    var valor = document.getElementById("3").value;
    var display = document.getElementById("display");
    num = num + valor
    display.innerHTML = (showdisplay = showdisplay + valor);
  }

  boton4.onclick = () => {
    var valor = document.getElementById("4").value;
    var display = document.getElementById("display");
    num = num + valor
    display.innerHTML = (showdisplay = showdisplay + valor);
  }

  boton5.onclick = () => {
    var valor = document.getElementById("5").value;
    var display = document.getElementById("display");
    num = num + valor
    display.innerHTML = (showdisplay = showdisplay + valor);
  }

  boton6.onclick = () => {
    var valor = document.getElementById("6").value;
    var display = document.getElementById("display");
    num = num + valor
    display.innerHTML = (showdisplay = showdisplay + valor);
  }

  boton7.onclick = () => {
    var valor = document.getElementById("7").value;
    var display = document.getElementById("display");
    num = num + valor
    display.innerHTML = (showdisplay = showdisplay + valor);
  }

  boton8.onclick = () => {
    var valor = document.getElementById("8").value;
    var display = document.getElementById("display");
    num = num + valor
    display.innerHTML = (showdisplay = showdisplay + valor);
  }

  boton9.onclick = () => {
    var valor = document.getElementById("9").value;
    var display = document.getElementById("display");
    num = num + valor
    display.innerHTML = (showdisplay = showdisplay + valor);
  }

  boton0.onclick = () => {
    var valor = document.getElementById("0").value;
    var display = document.getElementById("display");
    num = num + valor
    display.innerHTML = (showdisplay = showdisplay + valor);
  }

  suma.onclick = () => {
    console.log("Suma");
    var operation = document.getElementById("+").value;
    var display = document.getElementById("display");
    showdisplay = showdisplay + operation;
    operation_arr.push(num);
    operation_arr.push(operation);
    num = "";
    console.log(operation_arr);
    display.innerHTML = showdisplay;
  }

  resta.onclick = () => {
    console.log("Resta");
    var operation = document.getElementById("-").value;
    var display = document.getElementById("display");
    showdisplay = showdisplay + operation;
    operation_arr.push(num);
    operation_arr.push(operation);
    num = "";
    console.log(operation_arr);
    display.innerHTML = showdisplay;
  }

  mult.onclick = () => {
    console.log("Multiplicación");
    var operation = document.getElementById("*").value;
    var display = document.getElementById("display");
    showdisplay = showdisplay + operation;
    operation_arr.push(num);
    operation_arr.push(operation);
    num = "";
    console.log(operation_arr);
    display.innerHTML = showdisplay;
  }

  divi.onclick = () => {
    console.log("Multiplicación");
    var operation = document.getElementById("/").value;
    var display = document.getElementById("display");
    showdisplay = showdisplay + operation;
    operation_arr.push(num);
    operation_arr.push(operation);
    num = "";
    console.log(operation_arr);
    display.innerHTML = showdisplay;
  }

  dec.onclick = () => {
    var valor = document.getElementById(".").value;
    var display = document.getElementById("display");
    num = num + valor
    display.innerHTML = (showdisplay = showdisplay + valor);
  }

  botonequal.onclick = () => {
    console.log("Igual");
    operation_arr.push(num);
    console.log(operation_arr)
    showdisplay = "";
    num = "";
    var display = document.getElementById("display");

    operation = operation_arr[1];
    op1 = operation_arr[0]
    op2 = operation_arr[2]

    if (operation == "+") {
      var resultado = parseFloat(op1) + parseFloat(op2);
      console.log(operation_arr)
    } else if (operation == "-") {
      var resultado = parseFloat(op1) - parseFloat(op2);
      console.log(operation_arr)
    } else if (operation == "*") {
      var resultado = parseFloat(op1) * parseFloat(op2);
    } else if (operation == "/") {
      var resultado = parseFloat(op1) / parseFloat(op2);
    }

    display.innerHTML = resultado;
    operation_arr.splice(0, 3);
    console.log(operation_arr)
    }
}
