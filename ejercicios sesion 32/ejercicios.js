/*script de primedio de notas de un alumno*/

function promedio(a, b, c, d, e ){
    let resultado 
    resultado = parseFloat(a) + parseFloat(b) + parseFloat(c) + parseFloat(d) + parseFloat(e)
    resultado = resultado/5
    return resultado
  
}
let nota1 = parseFloat(prompt("ingresa la primera nota: "))
let nota2 = parseFloat(prompt("ingresa la segunda nota: "))
let nota3 = parseFloat(prompt("ingresa la trecera nota: "))
let nota4 = parseFloat(prompt("ingresa la cuarta nota: "))
let nota5 = parseFloat(prompt("ingresa la quinta nota: "))

nota1 = 1
nota2 = 5
nota3 = 3
nota4 = 2
nota5 = 5

resultado = promedio(nota1,nota2, nota3, nota4, nota5)
console.log ("el promedio es " + resultado)

/*script de calcular el area y el perimetro de un rectangulo*/

function calcularPerimetroArea(b,h){
    let resultadoPerimetro = ( (b + h) * 2);
    let resultadoArea = (b * h );
    return [resultadoPerimetro,resultadoArea]
    
    }
    
    let base = parseFloat(prompt("ingresa la base del rectanguo: "))
    let altura = parseFloat(prompt("ingresa la altura del rectangulo: "))
    let total = calcularPerimetroArea(base,altura)
    console.log(`El perimetro es: ${total[0]} \nEl area es: ${total[1]}`)
    console.log('El perimetro es: '+ total[0] +' \nEl area es: '+total[1])

    /*1-Crea una función que acepte dos números y una cadena que 
    represente una operación ("suma", "resta", "multiplicacion", "division"). La función debe realizar 
    la operación correspondiente y devolver el resultado.*/

    let num1 = parseInt(prompt("ingrese el primer numero: "))
let num2 = parseInt(prompt("ingrese el segundo numero: "))
let resultado

function operacionesAritmeticas ( ){
    let continuar =  true
while (continuar) {
let operacion = prompt("Ingrese operación (suma, resta, multiplicacion, division): ")
switch (operacion) {
    case "suma":
        resultado = num1 + num2;
        break;
    case "resta":
        resultado = num1 - num2;
        break
    case "multiplicacion":
        resultado = num1 * num2;
        break;
    case "division":
        resultado = (num1 / num2)
        console.log("Fin de operación.")
        break
    default:
        console.log("Operación inválida.")
        
       
}
 return resultado;
}
}
let respuesta = operacionesAritmeticas()
console.log (" el resultado es: " + resultado)

/*2- Escribe una función que convierta una temperatura de Celsius
 a Fahrenheit o viceversa. La función debe aceptar la temperatura 
 y una cadena que indique la escala de temperatura ("C" para Celsius, "F" para Fahrenheit) 
y devolver la temperatura convertida.*/

let temperatura = parseFloat(prompt("ingresa la temperatura: "))
    let grados = prompt("en que grados esta la temperatura (C , F): ")
    let comvercion = prompt("selecciona a que escala necesitas la tamperatura(F, C ): ") 
    function combertirTemperatura(a ){
        
        
let teperaturacomvertida;
   
    
    switch (comvercion) {
        case "F":
            teperaturacomvertida = (a * (9/5)) + 32;
            break;
        case "C":
            teperaturacomvertida = ( a - 32) * (5/9);
            console.log(" finde operacion")
            break;
            default:
            console.log("dato incorrecto")
    }
    return teperaturacomvertida
    }
    
    let respuestas = combertirTemperatura(temperatura);
    console.log (" El resultado es: " + respuesta + "°" )
