//primer ejercicio practica en clase

/*1- Haz un script que calcule el precio total a pagar por tu compra,
 para calcular el precio total debemos sumar el precio de los productos
  por el iva, asume un iva del 19%.*/

/*para calcular el precio total debemos sumar el precio de los 
productos por el iva, asume un iva del 19%.*/


function calcularPrecioTotalConIVA(subtotal) {
    const IVA = 19; 
    subtotal = parseInt(subtotal) 
   return precioTotal = subtotal + subtotal * IVA/100 ;
    
    
}

let compra = prompt(" valor total a pagar : ")
let resultado = calcularPrecioTotalConIVA(compra)
console.log("valor total a pagar ",resultado)


// este es el segundo ejercicio//
/*2-realiza un programa que te permita calcular el  área, y perímetro de un cuadrado. 
asume que tienes uno de sus lados en una variable.*/ 

let lado = parseInt(prompt("ingresar valor de un lado ")
)

let areaCuadrado = (lado * lado);
let perimetroCuadrado = (lado * 4);


console.log ("el area del cuadrado es " + areaCuadrado + " y " + "el perimetro es " + perimetroCuadrado)

//este es el tercer ejercicio//
/* 3- Realiza un script que lea el nombre del usuario y 
salude con un "Hola" seguido del nombre del usuario. Para 
leer el nombre usa un prompt con un texto indicativo como "Escribe tu nombre"
*/ 
let nombre = prompt("cual es tu nombre ")
    
    alert("hola " + nombre) 


//este es el cuarto ejercico//
/*4- realiza un script en el cual  vas a pedir al usuario 
que teclee tres números enteros y el script mostrará como
 resultado el valor medio de los tres.
Recuerda que la media de tres números se calcula sumando los tres y dividiendo entre 3.*/

let primerNumero = parseInt(prompt("ingresa primer numero entero "))
   let segundoNumero = parseInt(prompt("ingresa segundo numero entero "))
   let tercerNumero = parseInt(prompt("ingresa tercer numero entero "))
  let NumeroMedio = (primerNumero + segundoNumero + tercerNumero ) /3 ;
  
 console.log ("el numero medio es " + NumeroMedio)


 //este es el 5 ejercicio//
 /*5-Escribe un programa que solicite al usuario ingresar 
 el número de kilómetros recorridos por su coche y el número
  de litros consumidos . El script debe mostrar el consumo de combustible por kilómetro.
Un problema matemático muy simple: el número de litros dividido por el número de kilómetros.*/

 let kilometrosRecorridos = parseFloat(prompt("ingresar numero de kilometros recorridos "))
 let litrosCombustible = parseFloat(prompt("ingresar los litros de combustible consumidos "))
let consumoDeCombustible = (kilometrosRecorridos / litrosCombustible
)

console.log ("el consumo de combustible por kilometro es " + consumoDeCombustible);

 //este es el 6 ejercicio//
 /*6- En este ejercicio debes convertir a segundos 
 una medida de tiempo dada en horas y minutos*/

 let horas = parseFloat(prompt("ingresar horas "))
 let minutos = parseFloat(prompt("ingresar minuos "))
 let segundos = parseFloat(prompt("ingresar segundos "))
 tiempo = horas * 3600 + minutos * 60 + segundos
 
 console.log(tiempo)

 // este es el 7 ejercicio//
 /*7- Realiza un script en el cual debes pedir al usuario un
  número de dos dígitos y debes devolver el número de unidades
   y de decenas, o sea, cada dígito del número. Usa solo operaciones aritméticas
Recuerda si divides un número entre 10 el cociente entero es el número
 de decenas y el resto es el número de unidades*/

 let numero = parseFloat(prompt("ingresa un numero de 2 digitos "))
let unidades = numero % 10
let decenas = Math.floor(numero / 10)

console.log ("decenas: " + decenas + "\n unidades: " + unidades)

//este es el 8 ejercicio//
/*8- Escribe un script  que dado un número nos devuelva 
true si es un número par y false si es un número impar.*/

function esPar(numero) {
    return numero % 2 === 0;
}
let numero1 = prompt("Ingrese un número:");
numero = parseInt(numero);

let resultado1= numero();
console.log("¿Es par?", resultado1);//
