function main() {
  console.log("Que comiencen los juegos de JS");

  var boton = document.getElementById("botón");
  boton.onclick = () => {
    console.log("Click");

    var display = document.getElementById("display");
    display.innerHTML = "NUEVO TEXTO"
  }
}
