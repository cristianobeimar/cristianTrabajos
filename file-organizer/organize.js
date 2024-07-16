// const fs = require("fs");
// const path = require("path");

// const organizeFiles = (sourceFolder) => {
//   fs.readdir(sourceFolder, (err, files) => {
//     if (err) {
//       console.error("Error reading directory:", err);
//       return;
//     }

//     files.forEach((file) => {
//       const estencion = path.extname(file).toLowerCase();
//       const sourcePath = path.join(sourceFolder, file);
//       const targetFolder = path.join(
//         sourceFolder,
//         estencion.slice(1) +
//           "C:UserscristDocuments\funcionesCris\file-organizer"
//       );
//       const targetPath = path.join(targetFolder, file);

//       // Asegúrese de que la carpeta de destino exista; créela si no es así.
//       if (!fs.existsSync(targetFolder)) {
//         fs.mkdirSync(targetFolder);
//       }

//       // Mover el archivo a la carpeta de destino
//       fs.renameSync(sourcePath, targetPath);
//       console.log(`Moved ${file} to ${targetFolder}`);
//     });
//   });
// };

// // Uso: organizar archivos en la carpeta 'input_files'
// const sourceFolder = path.join(__dirname, "input_files");
// organizeFiles(sourceFolder);

//este fue el que yo hice: const Crear_Carpeta = (dir) => { fs.mkdir( C:/repositorio_Eider/lista-de-operaciones-/node_JS/node_3/carpetas/${dir}, { recursive: true }, (err) => { if (err) { return console.error(Error al crear la carpeta: ${err}); }console.log("Carpeta creada exitosamente."); } ); }; const fs = require("fs");const Carpeta_archivos1 = "C:/repositorio_Eider/lista-de-operaciones-/node_JS/node_3/htmloycss";const path = require("path");fs.readdir(Carpeta_archivos1, (err, files) => { if (err) { console.error("Error reading directory:", err); return; }files.forEach((item) => { const file = C:/repositorio_Eider/lista-de-operaciones-/node_JS/node_3/htmloycss/${item}; const ExtName = path.extname(file); console.log(ExtName.substring(1)); let destino = ""; if (ExtName) { Crear_Carpeta(ExtName.substring(1)); destino = C:/repositorio_Eider/lista-de-operaciones-/node_JS/node_3/carpetas/${ExtName.substring(1)}; fs.rename(file, destino, (err) => { if (err) { return console.error(Error al mover el archivo: ${item} ${err}); } console.log("Archivo movido exitosamente."); }); } else { console.log("no se puede"); return; } }); });

//fs.rename(file, destino, (err) => { if (err) { return console.error(Error al mover el archivo: ${err}); } console.log("Archivo movido exitosamente."); }); const ExtName = path.extname(img); console.log(Ext Name: ${ExtName} ${path.extname(filePhat)} `); files.forEach(file => { ..... console.log(Carpeta_archivos); fs.rename(archivoOrigen, archivoDestino, (err) => { if (err) { return console.error(`Error al mover el archivo: ${err}); } console.log('Archivo movido exitosamente.'); }); const Crear_archivo_funcion = (Archivonuevo) => { fs.writeFile( Archivonuevo, este es el nuevo contenido y ya esta creado el archivo\n, (err) => { if (err) throw err; else console.log("se creo correctamente "); } ); }; const direccionDestino_css = "C:/repositorio_Eider/lista-de-operaciones-/node_JS/node_3/carpetas/css"; const direccionDestino_html = "C:/repositorio_Eider/lista-de-operaciones-/node_JS/node_3/carpetas/html"; const direccionDestino_js = "C:/repositorio_Eider/lista-de-operaciones-/node_JS/node_3/carpetas/js"; const Carpeta_archivos = fs.readdir(Carpeta_archivos1, (err) => { if (err) { return console.error(Error al mover el archivo: ${err}); } console.log("Archivo movido exitosamente."); });

function Organizar_Archivos(
  Carpeta_archivos,
  Carpeta_destino,
  Accion = "copiar"
) {
  const fs = require("fs");
  const path = require("path");
  const Crear_Carpeta = (dir) => {
    fs.mkdir(path.join(Carpeta_destino, dir),(err) => {
      if (err) {
        console.error(`Error al crear la carpeta: ${dir} ${err}`);
      }
    });
  };

  fs.readdir(Carpeta_archivos, (err, files) => {
    if (err) {
      console.error("Error al leer el directorio:", err);
      return;
    }
    files.forEach((item) => {
      const file = path.join(Carpeta_archivos, item);
      const ExtName = path.extname(file);
           let destino = "";
      if (ExtName) {
        const nombreCarpeta = ExtName.substring(1);
        Crear_Carpeta(nombreCarpeta);
        destino = path.join(Carpeta_destino, nombreCarpeta, item);
        console.log(destino);

        
        fs.copyFile(file, destino, (err) => {
          if (err) {
            console.error(`Error al copiar el archivo: ${item}`, err);
            return;
          }
          if (Accion == "mover") {
            fs.unlink(file, (err) => {
              if (err) {
                console.error(
                  ` Error al eliminar el archivo : ${item}`,
                  err
                );
                return;
              }
              console.log(`Archivo ${item} el archivo se movido exitosamente.`);
            });
          }
        });
      } else {
        console.log("No se puede mover el archivo:", item);
      }
    });
  });
}
const Carpeta_archivos = "C:/Users/crist/Documents/funcionesCris/file-organizer/input_files";

const Carpeta_destino ="C:/Users/crist/Documents/funcionesCris/file-organizer/organizados";

Organizar_Archivos(Carpeta_archivos,Carpeta_destino);
