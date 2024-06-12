let numero = parseFloat(prompt("ingrese el numero: "))
if (numero % 2 === 0) {
    console.log(numero + "numero es par");
}

else {
    console.log(numero + "el numero no es par")
}
// segundo ejercicio//

let nota = prompt(" ingrese la nota")
if (nota >= 60) {
    console.log("aprovado ")
}
else {
    console.log("reprovado ")
}
//tercer ejercicio//

function numeroMayor() {
    let num1 = ('')
    let num2 = ('')
    let num3 = ('');
}
//ejercicio numero 3 //

console.log('escriba tres numeros')
let num1 = parseInt(prompt("escriba el primer numero: "));
let num2 = parseInt(prompt("escriba el segundo numero: "));
let num3 = parseInt(prompt("escriba el tercer numero: "));


if (num1 > num2 && num1 > num3) {
    console.log("el numero mayor es: " + num1);
}

else if (num2 > num3 && num2 > num1) {
    console.log("el numero mayor es: " + num2);
}
else if (num3 > num1 && num3 > num2) {
    console.log("el numero mayor es: " + num3);
}

/*ejercicio numero 4Determinar si un Año es Bisiesto:
Escribe una función que tome un año como argumento
e imprima "Bisiesto" si es divisible entre 4 pero no 
entre 100, o si es divisible entre 400; de lo contrario, imprime "No bisiesto".*/

let año = parseInt(prompt("ingresa el año que deseas saber si es visieso: "))
let respuesta

if (año % 4 === 0 && año % 100 != 0) {
    respuesta = ("es bisiesto")
}
else if (año % 400 === 0) {
    respuesta = ("es bisiesto")
}
else {

    respuesta = ("no es bisiesto")
}
console.log(respuesta)

/*5. Calculadora de IMC (Índice de Masa Corporal):
Escribe una función que tome el peso (en kilogramos) 
y la altura (en metros) como argumentos e imprima el estado del IMC según la siguiente tabla:
Menos de 18.5: Bajo peso
18.5 - 24.9: Normal
25 - 29.9: Sobrepeso
Más de 30: Obesidad*/

function MasaCorporal() {
    let pesoEnKlilogramos = prompt("ingresa el peso: ")
    let alturaEnMetros = prompt("ingrese la altura: ")


    let IMC = pesoEnKlilogramos / (alturaEnMetros ** 2)
    let respuesta

    if (IMC < 18.5) {
        respuesta = (" bajo de peso")
    }
    else if (IMC >= 18.5 && IMC <= 24.9) {
        respuesta = ("peso normal")
    }
    else if (IMC >= 25 && IMC <= 29.9) {
        respuesta("sobre peso")
    }
    else if (IMC >= 30) {
        respuesta = (" obesidad ")
    }
    console.log(respuesta)
}
/* 6. Clasificación de Triángulos:
Escribe una función que tome las longitudes de 
los tres lados de un triángulo como argumentos e
imprima si es un triángulo equilátero, isósceles o escaleno.*/


function TipoTriangulo() {
    let lado1 = parseFloat(prompt("ingresa el primer lado del triangulo: "))
    let lado2 = parseFloat(prompt("ingresa el segundo lado del triangulo: "))
    let lado3 = parseFloat(prompt("ingresa el tercer lado del triangulo: "))

    let ladosDeTriangulo

    if (lado1 === lado2 && lado1 === lado3) {
        ladosDeTriangulo = (" el triangulo es equilatero")
    }
    else if (lado1 === lado2 || lado2 === lado3 || lado1 === lado3) {
        ladosDeTriangulo = ("el triangulo es isoceles")
    }
    else {
        ladosDeTriangulo = ("el triangulo es escaleno")
    }


}

