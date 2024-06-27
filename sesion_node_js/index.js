// console.log("hola mundo")
// console.log("este es mi primer programa en node js")


const {suma,resta,obtenerInfoSistema,tiempoEncendido} = require('./script.js')

let sumaDeDosNumeros = suma(15 , 19)
let restaDeDosNumeros = resta(15 , 19)
let infoComputador = obtenerInfoSistema()
let tiempo = tiempoEncendido()

console.log ("La suma de los numeros es : ",sumaDeDosNumeros)
console.log ("La resta de los numero es: ", restaDeDosNumeros)
console.log("Respuesta de la peticion es:",infoComputador)
console.log("Este es el tiempo de encendido: ", tiempo)