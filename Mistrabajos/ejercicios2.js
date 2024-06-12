
/*ejercico numero 7 Realiza un script en el cual debes pedir
 al usuario un número de dos o mas dígitos y debes devolver el número 
 de unidades y de decenas, o sea, cada dígito del número. Usa solo operaciones aritméticas
Recuerda si divides un número entre 10 el cociente entero es el número 
de decenas y el resto es el número de unidades*/

let numero = parseFloat(prompt("ingresa un numero de 2 digitos "))
let unidades = numero % 10
let decenas = Math.floor(numero / 10)

console.log ("decenas: " + decenas + "\n unidades: " + unidades)

cadena = numero.split("")

//trabajo 7 de mostrar unidades y decenas//

let numero1 = prompt("porfavor ingresa un numero:")

cadena = numero.split('')
alert(cadena)
let primeraPosicion = cadena[0]
let segundaPosicion = cadena[1]

alert("primeraPosicion: " + primeraPosicion)
alert("segundaPosicion: " + segundaPosicion)

let unidades1 = cadena[cadena.length -1];
let decenas2 = cadena[cadena.length -2];

alert("unidades: " + unidades + "\ndecenas: " + decenas);
alert("cantidad de digitos: " +cadena.length);



