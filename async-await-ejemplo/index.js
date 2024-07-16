const fs = require("fs");
// aCon esta funcion ´puedo agragar un texto o contenido al arhivo en el que decee guardar
function nuevaEntrada() {
  const entrada = "Este es un ejercicio para agregar texto o contenido a un archivo utilizando la libreria fs de node.js\n";

  fs.writeFile("input.txt", entrada, (err) => {
    if (err) throw err;
    console.log("Se agrego el sigiente texto al archivo txt:");
    console.log(entrada);
  });
}
 
// eta funcion me sirve para leer el contenido del documento que agrege el texto 
function leerArchivo(archivo_leer){
    fs.readFile(archivo_leer, "utf8", (err, data) => {
    if (err){
      console.log("Archivo no iniciado.");
      throw err;
    }
    console.log("data: ",data);
  });
}

// Con esta funcion sincrona espero una promesa  

function esperar(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
// con esta funcion optenemos los de una API atravez de una promesa

async function obtenerDatos(){
    return new Promise(resolve => {
        setTimeout(()=> {
            resolve(leerArchivo("input.txt")
            );
        }, 2000);
    });
}
(async function(){
  const data = await obtenerDatos()
})()
