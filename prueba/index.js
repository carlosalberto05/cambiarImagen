function cambiarImagen() {
  let lastImagen = document.getElementById("imagen");
  console.log(lastImagen.src.match("Uno"));
  if (lastImagen.src.match("Uno")) {
    lastImagen.src = "./spiderDos.jpg";
  } else {
    lastImagen.src = "./spiderUno.jpg";
  }
}
