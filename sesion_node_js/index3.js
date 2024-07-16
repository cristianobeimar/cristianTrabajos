//este codigo me sirve para crear un archivo en un cervidor
const fs = require("fs");

fs.readFile("archivo.txt", "utf-8", (err, data) => {
  if (err) throw err;
  console.log("este es un nuevo archivo: ", data);
});

//est codigo me sirve para añadir un contenido en le archivo que se crea en el cervidor

fs.appendFile("archivo.txt", "Contenido que agrego al alchivo. \n", (error) => {
  if (error) throw error;
  console.log("agregado correctamente");
});

fs.readFile("archivo.txt", "utf-8", (err, data) => {
  if (err) throw err;
  console.log("El contenido original del archivo es : \n", data);
  nuevo = "este es el nuevo contenido del archivo";

  fs.writeFile("archivo.txt", nuevo, (err) => {
    if (err) throw err;
    console.log("archivo editado con exito");
  });
});
fs.readFile("archivo.txt", "utf-8", (err, data) => {
  if (err) throw err;
  console.log("Contenido actualizado : \n", data);
});
