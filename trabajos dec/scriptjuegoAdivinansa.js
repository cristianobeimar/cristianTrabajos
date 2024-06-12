
let numMax = 100;
let numMin = 1; 
let numAleatorio = parseInt((Math.random() * 100) + 1);
let intentos = 0;
let numero = ""
let resultado = ""

console.log(numAleatorio)

function adivinar(){
    intentos++;
    numero = document.getElementById("inputGuess").value

    if (numero < numAleatorio){
        
        resultado =("numero mas grande")
    }
    else if(numero > numAleatorio){
        resultado =("numero bajo")
        
    }
    else {
        resultado = ("excelente! adivinastes el numero en: " + (intentos) + " intentos")
    }
        document.getElementById("resultado").innerText = resultado
    
}