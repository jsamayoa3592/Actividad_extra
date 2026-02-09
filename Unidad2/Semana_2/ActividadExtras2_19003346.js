var jugar = "SI";

while (jugar === "SI") {

  var numerocpu = Math.floor(Math.random() * 9) + 1;

  var numerojugador = parseInt(prompt("Ingrese un número entre 3 y 6:"));
  while (numerojugador < 3 || numerojugador > 6) {
    numerojugador = parseInt(prompt("Número inválido, ingrese un número entre 3 y 6:"));
  }

  var opcion = parseInt(prompt("Adivine si su número es:\n1) Mayor\n2) Menor\n3) Igual"));
  while (opcion < 1 || opcion > 3) {
    opcion = parseInt(prompt("Opción inválida.\n1) Mayor\n2) Menor\n3) Igual"));
  }

  var relacionReal = "";
  if (numerojugador > numerocpu) relacionReal = "mayor";
  else if (numerojugador < numerocpu) relacionReal = "menor";
  else relacionReal = "igual";

  var textoOpcion = "";
  if (opcion === 1) textoOpcion = "mayor";
  else if (opcion === 2) textoOpcion = "menor";
  else textoOpcion = "igual";

  var acerto = (textoOpcion === relacionReal);

  if (acerto) {
    alert("La computadora eligió " + numerocpu + ", usted eligió " + numerojugador +
          ". Su elección es " + relacionReal + ". ¡Ha adivinado!");
  } else {
    alert("La computadora eligió " + numerocpu + ", usted eligió " + numerojugador +
          ". Su elección es " + relacionReal + ". No ha adivinado.");
  }

  jugar = prompt("¿Desea jugar otra vez? (SI/NO)");
  if (jugar === null) jugar = "NO";

  jugar = jugar.toUpperCase().trim();

  while (jugar !== "SI" && jugar !== "NO") {
    jugar = prompt("Respuesta inválida. Escriba SI o NO:");
    if (jugar === null) jugar = "NO";
    jugar = jugar.toUpperCase().trim();
  }

  if (jugar === "NO") {
    alert("Gracias por jugar.\nNombre: Jesús Samayoa\nCarnet: 19003346");
  }
}
