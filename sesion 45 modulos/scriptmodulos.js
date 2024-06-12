


import { sumar,dividir, multiplicar, restar, potencia, raiz } from "./ejercicio.js";
import { redondear, valorAbsoluto } from "./utilities.js";

const operador = document.getElementById('operador')
const resultado = document.getElementById('resultado')

function calcular(operacion) {
    let number1 = parseFloat(document.getElementById("number1").value)
    let number2 = parseFloat(document.getElementById("number2").value )
    switch (operacion) {
        case 'sumar':
            operador.textContent = '+'
            resultado.textContent = sumar(number1, number2)

            break;
        case 'restar':
            operador.textContent = '-'
            resultado.textContent = restar(number1, number2)
            break;
        case 'multiplicar':
            operador.textContent = '*'
            resultado.textContent = multiplicar(number1, number2)
            break;
        case 'dividir':
            operador.textContent = '/'
            resultado.textContent = dividir(number1, number2)
            break;
        case 'potencia':
            operador.textContent = '**'
            resultado.textContent = potencia(number1, number2)
            break;
        case 'raiz':
            operador.textContent = '√'
            resultado.textContent = raiz(number1, number2)
            break;

        default:
            break;
    }
}

window.calcular = calcular


const operador2 = document.getElementById('operador2')
const resultado2 = document.getElementById('resultado2')

function calcular2(operacion) {
    let number = parseFloat(document.getElementById("number").value)
    switch (operacion) {
        case 'redondear':
            operador2.textContent = '+'
            resultado2.textContent = redondear(number)

            break;
        case 'valorAbsoluto':
            operador2.textContent = '-'
            resultado2.textContent = valorAbsoluto(number)
            break;

        default:
            break;
    }
}

window.calcular2 = calcular2

//a**(1/b)