/*Dibujar un Cuadro de Asteriscos
Crea una función en JavaScript que reciba un número entero n 
y dibuje un cuadro de n x n asteriscos. Por ejemplo, si n es 4, debería imprimir:*/


   
imprimirTablaMultiplicar(4);
   
function cuadrado(filas){
 for (let i = 0; i < filas; i++){
 
 let fila = '';
 for (let j = 0;  j < 5; j++){
     fila += ' * ';
     
        }
     console.log (fila);
     }
 }
cuadrado(10)

/*Serie de Fibonacci hasta n
Escribe una función que genere la serie de Fibonacci
 hasta un número n dado. La serie de Fibonacci es una 
 secuencia donde cada número es la suma de los dos números 
 anteriores, empezando con 0 y 1. Por ejemplo, si n es 10, debería imprimir:*/

let numero = prompt("inresa un numero: ")
function fib(numero){
    let fibonacci = [0, 1]
    for(let i = 2; i < numero; i++){
       fibonacci[i]= fibonacci[i-1] + fibonacci[i-2]
    }
    console.log(fibonacci)
}

fib(numero)