// funciones asincronas: Una funcion asicrna que espera una promesa

import { resolve } from "path";

function esperar(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// declaramos una funcion asincrona y este tipo de funcion me permite utilizar el await

async function asincrona() {
  console.log("esperando 5 segundos...");
  await esperar(5000);
  console.log("Han pasado 5 segundos");
}

asincrona();
// esta funcion simula una peticion a una API y devuelve los datos despues de la espera de un segundo 

function obtenerDatos(){
    return new Promise(resolve => {
        setTimeout(()=> {
            resolve({data: 'hola ,mundo!'});
        }, 1000);
    });
}

// esta funcion asincrona usa await para optener datos
async function traerDatos(){
    console.log("obteniendo datos.."); 
        const resultado= await fetchData(); //Aqui espera que los datos sean obtenidos
            console.log("datos optenidos,", resultado);
        }
        //ejecutamos la funcion
traerDatos()
