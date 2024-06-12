/*escribir un programa que use el bucle for para imprimir
la tabla de multiplicar de un numero que ingrese el usuario*/

let numero2 = parseInt(prompt("ingresa un numero: "))

   for (let A = 1; A <= 11; A++){
    console.log (numero + " * " + A + " = " + (numero * A)) 
}

/* crea un program que sume todo los numeros de un aray
utilizando el bucle for*/

let numero1 =[1, 2, 3, 4, 5, 6, 7]
let suma = 0
for (let B = 0; B < numero.length; B++){
    suma += numero[B];
}
    console.log("la suma de los numeros es " + suma);
/*Objetivo: Crear un programa que filtre y encuentre datos 
específicos dentro de un array de objetos representando libros en una 
biblioteca, usando los distintos tipos de ciclo for.
Usa el siguiente array de objetos para el ejercicio.
let library = [
    { title: "Cien años de soledad", author: "Gabriel García Márquez", year: 1967 },
    { title: "1984", author: "George Orwell", year: 1949 },
    { title: "Don Quijote de la Mancha", author: "Miguel de Cervantes", year: 1605 },
    { title: "La Odisea", author: "Homero", year: -800 }  // Estimated year of composition
];
Permitir al usuario buscar libros por autor o año de publicación.
Utilizar diferentes tipos de bucles for para iterar sobre el array y las propiedades de los objetos.
Uso de bucles en ejercicio.
Bucle for clásico: Usa este bucle para buscar todos los libros publicados en un
 año específico ingresado por el usuario.
Bucle for...of: Utiliza este bucle para listar todos los libros de un autor específico.
Bucle for...in: Emplea este bucle para imprimir todas las propiedades de los libros en la biblioteca.
Consejos:
Implementa controles para verificar si los libros buscados existen antes de imprimir los resultados.*/

let library = [
    { title: "Cien años de soledad", author: "Gabriel Garcia Marquez", year: 1967 },
    { title: "1984", author: "George Orwell", year: 1949 },
    { title: "Don Quijote de la Mancha", author: "Miguel de Cervantes", year: 1605 },
    { title: "La Odisea", author: "Homero", year: -800 } 
];
let opcion = prompt("si deceas buscar un libro por autor escribe el # 1 y si lo buscar por año escriber #2, si deceas que todo los libros de la biblioteca escribe el # 3: ")
if (opcion === "1"){
let autor = prompt("ingresa un author; ");
for(let i = 0; i < library.length; i++){
if (autor === library[i].author){
    console.log ("libro disponible: " + library[i].title + " autor: " + library[i].author + " Año: " + library[i].year)

    }
  }
}

if (opcion === "3"){
let año = parseInt(prompt("ingresa el año; "));
for(let i = 0; i < library.length; i++){
if (año === library[i].year){
    console.log ("libro disponible: " + library[i].title + " autor: " + library[i].author + " Año: ")
    
    }
  }
}
else if (opcion === "2"){
for(let i = 0; i < library.length; i++){

    console.log ("libro disponible: " + library[i].title + " autor: " + library[i].author + " Año: " +library[i].year)
    
    }
  }
 /* 2. Crea un juego simple donde el usuario debe adivinar 
 un número aleatorio entre 1 y 10. El código en JS debe decirle 
 al usuario si el número ingresado es alto o bajo, y contar el número
  de intentos hasta que adivine correctamente.*/

  let num = 1, numClave = 5, numerosVeces = 1;
while (num < 11 && num != numClave ){
    let num = parseInt(prompt('busca el numero clave del 1 al 10: '))
     if (num < numClave){
     alert('bajo')}
             else if (num > numClave)  {alert('es alto')}
        else if (num === numClave)
         { console.log('el numero ' + num +'  es correcto '+ '\nnumero de intentos es:' +  numerosVeces) ; break}
        numerosVeces ++
}





