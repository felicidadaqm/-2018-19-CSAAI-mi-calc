function main() {

  var op_elements = {
    num: "",
    operation_arr: [],
  }

  var numeros = {
    boton1: document.getElementById("1"),
    boton2: document.getElementById("2"),
    boton3: document.getElementById("3"),
    boton4: document.getElementById("4"),
    boton5: document.getElementById("5"),
    boton6: document.getElementById("6"),
    boton7: document.getElementById("7"),
    boton8: document.getElementById("8"),
    boton9: document.getElementById("9"),
    boton0: document.getElementById("0"),
    display: document.getElementById("display"),
  }

  var operaciones = {
    suma: document.getElementById("+"),
    resta: document.getElementById("-"),
    mult: document.getElementById("*"),
    divi: document.getElementById("/"),
    botonequal: document.getElementById("="),
    dec: document.getElementById("."),
}

  var showdisplay = {
    disp: "",
    update: function (value) {
      this.disp += value;
      numeros.display.innerHTML = this.disp;
    }
  }

  numeros.boton1.onclick = () => {
    console.log("Click");
    var valor = document.getElementById("1").value
    showdisplay.update(valor);
    op_elements.num += valor
  }

  numeros.boton2.onclick = () => {
    var valor = document.getElementById("2").value
    showdisplay.update(valor);
    op_elements.num += valor
  }

  numeros.boton3.onclick = () => {
    var valor = document.getElementById("3").value
    showdisplay.update(valor);
    op_elements.num += valor
  }

  numeros.boton4.onclick = () => {
    var valor = document.getElementById("4").value
    showdisplay.update(valor);
    op_elements.num += valor
  }

  numeros.boton5.onclick = () => {
    var valor = document.getElementById("5").value
    showdisplay.update(valor);
    op_elements.num += valor
  }

  numeros.boton6.onclick = () => {
    var valor = document.getElementById("6").value
    showdisplay.update(valor);
    op_elements.num += valor
  }

  numeros.boton7.onclick = () => {
    var valor = document.getElementById("7").value
    showdisplay.update(valor);
    op_elements.num += valor
  }

  numeros.boton8.onclick = () => {
    var valor = document.getElementById("8").value
    showdisplay.update(valor);
    op_elements.num += valor
  }

  numeros.boton9.onclick = () => {
    var valor = document.getElementById("9").value
    showdisplay.update(valor);
    op_elements.num += valor
  }

  numeros.boton0.onclick = () => {
    var valor = document.getElementById("0").value
    showdisplay.update(valor);
    op_elements.num += valor
  }

  operaciones.suma.onclick = () => {
    var operation = document.getElementById("+").value;
    op_elements.operation_arr.push(op_elements.num);
    op_elements.operation_arr.push(operation)
    showdisplay.update(operation);
    op_elements.num = "";
  }

  operaciones.resta.onclick = () => {
    console.log("rest");
    var operation = document.getElementById("-").value;
    op_elements.operation_arr.push(op_elements.num);
    op_elements.operation_arr.push(operation);
    showdisplay.update(operation);
    op_elements.num = "";
  }

  operaciones.mult.onclick = () => {
    console.log("mult");
    var operation = document.getElementById("*").value;
    op_elements.operation_arr.push(op_elements.num);
    op_elements.operation_arr.push(operation)
    showdisplay.update(operation);
    op_elements.num = "";
  }

  operaciones.divi.onclick = () => {
    console.log("divi");
    var operation = document.getElementById("/").value;
    op_elements.operation_arr.push(op_elements.num);
    op_elements.operation_arr.push(operation)
    showdisplay.update(operation);
    op_elements.num = "";
  }

  operaciones.dec.onclick = () => {
    console.log("decimal");
    var valor = document.getElementById(".").value;
    showdisplay.update(valor)
    op_elements.num += valor
  }

  operaciones.botonequal.onclick = () => {
    console.log("Igual");
    op_elements.operation_arr.push(op_elements.num);
    showdisplay.disp = "";
    op_elements.num = "";

    operation = op_elements.operation_arr[1];
    op1 = parseFloat(op_elements.operation_arr[0]);
    op2 = parseFloat(op_elements.operation_arr[2]);

    if (operation == "+") {
      resultado = op1 + op2;
    } else if (operation == "-") {
      resultado = op1 - op2;
    } else if (operation == "*") {
      resultado = op1 * op2;
    } else if (operation == "/") {
      if (op2 == 0) {
        resultado = "Math error"
      } else {
        resultado = op1 / op2;
      }
    }

    console.log(resultado)
    showdisplay.update(resultado);
    op_elements.operation_arr.splice(0, 3);
    showdisplay.disp = "";
    }
}
