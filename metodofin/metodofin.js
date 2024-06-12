/*Ejercicio: Sistema de Gestión de Inventario

Desarrollar un sistema para gestionar el inventario de 
productos de una tienda. El sistema permitirá añadir productos
 al inventario, vender productos y mostrar el inventario actual.

Especificaciones:

Función para añadir productos al inventario:
- Cada producto tiene un nombre, precio y cantidad.
- Si el producto ya existe, aumentar la cantidad.

Función para vender productos:
- Reducir la cantidad de productos en el inventario.
- No permitir la venta si no hay suficiente stock.

Función para mostrar el inventario:
- Listar todos los productos con su cantidad y precio.*/

let inventario = [{
    nombre: 'productoA',
    precio: 3000,
    cantidad: 2
},{
    nombre: 'productoB',
    precio: 2000,
    cantidad: 5
}
];


function mostrarInventario() {
console.log("Inventario Actual:")
inventario.forEach((item) =>
    console.log(`${item.nombre} - Precio: $${item.precio} - Cantidad: ${item.cantidad}`))
}

function agregarInventario() {
let nombreA = prompt("Ingrese el nombre del producto: ")
let precioA = parseFloat(prompt("Ingrese el precio: "))
let cantidadA = parseInt(prompt("Ingrese la cantidad: "))

let productoA = inventario.find((item) => item.nombre === nombreA)
if (productoA != undefined) {
    productoA.cantidad += cantidadA
    if (productoA.precio != precioA) {
        productoA.precio = precioA
    }
} else {
    inventario.push({nombre: nombreA, precio: precioA, cantidad: cantidadA})
}
}
function venderInventario() {
console.log("Vender producto: ")

let nombreA = prompt("¿Que producto deseas vender? ")
let cantidadA = prompt("¿Que cantidad deseas vender? ")
let productoA = inventario.find((item) => item.nombre === nombreA)
if (productoA != undefined) {
    if (productoA.cantidad >= cantidadA){
        productoA.cantidad -= cantidadA
    }else {
        console.log(`producto: ${productoA.nombre} - Precio: ${productoA.precio} cantidad insuficiente, Cantidad disponible: ${productoA.cantidad}`)
    }
} else {
     console.log(`producto: ${nombreA} No disponible `)
}
}
let continuar = true
while (continuar) {
let operacion = prompt("Ingrese operación (ver, agregar, vender, salir): ")
switch (operacion) {
    case "ver":
        mostrarInventario()
        break;
    case "agregar":
        agregarInventario()
        break
    case "vender":
        venderInventario()
        break;
    case "salir":
        continuar = false
        console.log("Fin de operación.")
        break
    default:
        console.log("Operación inválida.")
}
}

/*Desarrollar un sistema para gestionar una lista de tareas. 
Los usuarios podrán añadir tareas a la lista, marcar tareas como 
completadas y ver las tareas actuales.Especificaciones:
Añadir una nueva tarea con un título.
Permitir al usuario especificar el índice de la tarea a marcar como completada.
Mostrar todas las tareas y su estado (completada o no).*/

let tareas = [{

    titulo: "tarea1",

    descripcionTarea: "realizar el aseo" ,

    estadoTarea: false
} 
   ]
let continuar1 = true  

function agregarTarea(titulo, descripcion){

    tareas.push({titulo:titulo, descripcionTarea:descripcion, estadoTarea: false})

    console.log("Tarea agregada")
}
function mostrarTarea(){

    tareas.forEach((item) =>

        console.log(`Titulo de la tarea: ${item.titulo}, descripcion: ${item.descripcionTarea}
        , estado: ${item.estadoTarea ? "tarea completa." : "tarea Incompleta." }\n`))
}
while(continuar){

    let opercion = prompt("Ingresa el numero de la operacion que deseas realizar");
    ("\n1.agregar tarea, 2.mostrar todas las tareas, 3.completar tareas, 4.salir\n");

        switch(opercion){

            case "1":

            let tiutloTarea = prompt("Ingrese el nombre de la tarea: ")

            let descripcionTarea = prompt("Ingrese la descripcion de la tarea: ")

             agregarTarea(tiutloTarea, descripcionTarea)

            break;
            case "2":

            mostrarTarea()

            break;
            case "3":

            break;

            case "4":

            break;

            default:

            console.log("Operacion no valida")

        }
}

