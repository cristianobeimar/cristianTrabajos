/*Ejercicio 2: Crear Resumen de Compra

Desarrollar una función que tome un array de objetos representando 
artículos de compra (cada uno con un nombre y precio), calcule el total, 
y retorne un resumen de compra utilizando template literals.*/

function generarMensaje(nombre,hora){
    if(hora > 23 && hora < 0){
        console.log("hora invalida")
    }
    else if(hora < 12){
         console.log(`buenos dias ${nombre}`)
    }
    else if(hora >= 12 && hora <=18){
        console.log(`buenas tardes ${nombre}`)
    }else{
        console.log(`buenas noches: ${nombre}`)
    }
}
let nombre = prompt("ingresa tu nombre: ")
let hora = parseFloat(prompt("ingresa la hora: "))
generarMensaje(nombre,hora)

/*Ejercicio 2: Crear Resumen de Compra

Desarrollar una función que tome un array de objetos representando
 artículos de compra (cada uno con un nombre y precio), calcule el total, 
y retorne un resumen de compra utilizando template literals.*/

let articulos = []
let valor1 = true

    function agregarProducto(){
    let articulo = prompt("ingrese e nombre del articulo: ")
    let precio = parseFloat(prompt("ingrese el valor del articulo: "))
    articulos.push({nombre:articulo,valor:precio})
    console.log("precio agregado correctamente")
    }
    
    function sumaGastos(){
        let precioTotal = 0
       for(let i =0; i< articulos.length;i++){
           precioTotal += parseFloat(articulos[i].valor)
        }
       console.log("el precio total es: " + precioTotal) 
    }
while(valor1){
    let operacion = prompt("escribe el numero de la operacion que deceas realizar entre(1,2 o 3)")

    switch(operacion){
    case '1':
        agregarProducto()
           // console.log(articulos)
        break
    case '2':
        sumaGastos()
        break
    case '3':
        break
    default: console.log("balor incorecto")
}  
}

/*Ejercicio 3: Sistema de Reservas para Eventos

Crear un sistema que gestione reservas para eventos. El sistema 
deberá poder añadir eventos, registrar asistentes a cada evento, 
y generar un reporte final usando map y template literals.*/
