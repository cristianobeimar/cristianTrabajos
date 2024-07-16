const path= require('path');

const filePath = "C:\Users\crist\Documents\index.txt.txt";

// obtener el nombre de l archivo
const baseName = path.basename(filePath);
console.log(`baseName: ${baseName}`);

// como obtener la carpeta del archivo
const dirName = path.dirname(filePath);
console.log(`dirName: ${dirName}`);

// como obtener el tipo de archivo(la extencion)
const extName = path.extname(filePath);
console.log(`Ext Name: ${extName}`);

// obtener el tipo de imagen
const filepath2 = "C:\Users\crist\Downloads\ayte_1.svg"
const imgName = path.extname(filepath2);
console.log(`img Name: ${imgName}`);


const joinedPath = path.join('/user','local','ejemplo','index.txt');
console.log(`Jonied Path: ${joinedPath}`);

// pone la ruta donde uno trabaja y el archivo que boy a pasar
const resolvedPath = path.resolve('index.txt');
console.log(`Resolve Path: ${resolvedPath}`);

// como ver o imprimir la ruta como un objeto
const parsedPath = path.parse(filePath);
console.log('Parse Path:',parsedPath);

// formatear un objeto de una ruta en una cadena
const formattedPath = path.format(parsedPath);
console.log(`formatted Path: ${formattedPath}`);


// cambia la extencion de un archivo
const newFilePath = path.format({
    ...parsedPath,
    base: undefined,
    ext: '.md'
});
console.log(`New File Path: ${newFilePath}`);



