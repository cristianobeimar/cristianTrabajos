// const { error } = require("console")

const fs = require("fs");

const filePath = "practica.txt";

fs.writeFile(
  filePath,
  "este texto se guardara en el nuevo archivo que cree, \n",
  (error) => {
    if (error) throw error;

    console.log("archivo gruardado con exito");
  }
);

fs.readFile(filePath, "utf-8", (error, data) => {
  if (error) throw error;
  console.log("el archivo contiene:", data);
});

// este codigo me sirve para leer un archivo del cervidor y ejecutarlo:

// fs.readFile('nuevo.txt', 'utf-8', (error, data)=> {
//     if(error) throw error;
//     console.log("este es el nuevo: ", data)
// } )

// este codigo me sirve para agregar un nuevo camvio a un archivo del cervidor:

fs.appendFile(filePath, "contenido nuevo que agrege. \n", (error) => {
  if (error) throw error;
  console.log("agregado correctamente");
});
//con estge codigo leo el camvio que agrege en el codigo anterior
fs.readFile(filePath, "utf-8", (error, data) => {
  if (error) throw error;
  console.log("este archivo contiene: ", data);
});
