let caracteres = "wertyuiklñlkjnbvc"
let datos = caracteres.split("");
let lista = [];

function generadorContraseña(caracter){
    return function(longitud){
        for (let i = 0; i <= longitud; i++ ){
            let numeroAleatorio = (Math.random() * (caracter.length)).toFixed
            (0);
            lista.push(caracter[numeroAleatorio]);
        }
        return lista.join("");
        }
    }
    let resultadoContraseña = generadorContraseña(datos);
    console.log("esta es tu contraseña: " + resultadoContraseña(10));