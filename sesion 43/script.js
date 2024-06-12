/*Ejercicio - Sesión 43:*/
// Vamos a simular un sistema de reservas en línea para una pequeña biblioteca. El sistema permite a los usuarios consultar la disponibilidad de libros y reservarlos si están disponibles. Los datos de disponibilidad de los libros se obtienen de una API simulada.
// 1. Consulta de disponibilidad: La función debe consultar la disponibilidad de un libro por su ID.
// 2. Reserva de libros: Si el libro está disponible, la función debe permitir la reserva del libro.
// 3. Manejo de múltiples consultas y reservas: La función debe ser capaz de manejar la consulta y reserva de múltiples libros utilizando un bucle.
// 4. Condicionales: Debe utilizar condicionales para verificar si los libros están disponibles antes de permitir la reserva.

// Requisitos
// Crear una función asíncrona que consulte la disponibilidad de un libro.
// Crear una función asíncrona que permita reservar un libro.
// Utilizar bucles para manejar múltiples solicitudes.
// Utilizar condicionales para verificar la disponibilidad antes de reservar

//Aqui declaro mi array que en este caso es una simulacion de una api
let biblioteca = [
    {
        "id": "1",
        "titulo": "Cien Años de Soledad",
        "autor": "Gabriel García Márquez",
        "año": '1967',
        "categoria": "Novela",
        "disponibilidad": true
    },
    {
        "id": "2",
        "titulo": "1984",
        "autor": "George Orwell",
        "año": '1949',
        "categoria": "Distopía",
        "disponibilidad": true
    },
    {
        "id": "3",
        "titulo": "Don Quijote de la Mancha",
        "autor": "Miguel de Cervantes",
        "año": '1605',
        "categoria": "Novela",
        "disponibilidad": true
    },
    {
        "id": "4",
        "titulo": "El Principito",
        "autor": "Antoine de Saint-Exupéry",
        "año": '1943',
        "categoria": "Literatura Infantil",
        "disponibilidad": true
    },
    {
        "id": "5",
        "titulo": "Orgullo y Prejuicio",
        "autor": "Jane Austen",
        "año": '1813',
        "categoria": "Novela Romántica",
        "disponibilidad": true
    },
    {
        "id": "6",
        "titulo": "Matar a un Ruiseñor",
        "autor": "Harper Lee",
        "año": '1960',
        "categoria": "Ficción",
        "disponibilidad": true
    },
    {
        "id": "7",
        "titulo": "La Odisea",
        "autor": "Homero",
        "año": '800',
        "categoria": "Épica",
        "disponibilidad": true
    }
]
//declaro llamado: es para saber si a esa funcion la llaman de una parte prinsipal o desde otra funcion y libroBuscar es el id que el usuario va a buscar
let llamado = true
let libroBuscar = ''

function numAleatorio (){
    return Math.random()*(10000)
}
/*esta funcion sirve para devolver una promesa y tiene de parametro milisegundos 
que se nos hace facil para llamar la funcion a nuestro gusto*/
function esperar(milisegundos) {
    return new Promise(resolve => setTimeout(resolve, milisegundos));
}
//esta funcion nos sirve reservar un libro
async function reservaLibro (libros,llamadoPorUnaFuncion){
        try{
            let libroReservar = ''
            if (!llamadoPorUnaFuncion){
                libroReservar = prompt('ingresa el id del libro a reservar: ')
            }
            if (llamadoPorUnaFuncion){
                libroReservar = libroBuscar
            }
            console.log('\nCargando...\n')
            await esperar(numAleatorio())
            let pruebas = libros.find((item) => item.id == libroReservar)
            if(pruebas && pruebas.disponibilidad == true){
                let nombreUsuario = prompt('Ingresa tu nombre: ')
                let numUsuario = prompt('Ingresa tu numero telefonico: ')
                pruebas.disponibilidad = false
                console.log('\nreservando...')
                await esperar(numAleatorio())
                console.log(`\nse ha echo la reserva con los siguientes datos: \nNombre: ${nombreUsuario}\nTelefono: ${numUsuario}\n`)
            }else{
                console.log('Libro no encontrado')
            }
        }catch{
            console.log('No pudimos traer los datos\n')
        }
}
//esta funcion nos sirve para consultar un libro y ademas para reservar un ibro
async function ConsultaLibro(libros){
    try{
        libroBuscar = prompt('\nque libro quieres buscar: ')
        console.log('\nBuscando...')
        await esperar(numAleatorio())
        let prueba = libros.find(item => item.id == libroBuscar)
        if (!prueba){
            console.log('Ese libro no lo tenemos\n')
        }
        else{
            //console.log(prueba)
            switch (prueba.disponibilidad){
                case !undefined:
                    console.log('\nperfecto, tu libro esta disponible\n')
                    validacion = prompt('¿Quieres reselvarlo? (si/no)')
                    switch(validacion){
                        case 'si':
                            await reservaLibro(libros,llamado)
                            break;
                        case 'no':
                            validacion = false
                            break;
                        default: console.log('Ingresa (si) ó (no)')
                    }
                   break;
                default:
                    console.log('\nlo sentimos; tu libro no esta disponible\nIntenta con otro libro')
            }
        }
    }catch{
        console.log('Error al traer los datos')
    }
}
//esta funcion nos sirve para mostrar todos lis libros disponibles que hay
async function MostrarTodosLibros(libros){
    try{
        console.log('mostrando...')
        await esperar(numAleatorio())
        let todosLibros = libros.forEach(item => console.log(`titulo: ${item.titulo}\nId: ${item.id}\nDisponibilidad: ${item.disponibilidad}\nAutor: ${item.autor}\nAño: ${item.año}\nCategoria: ${item.categoria}\n`))
    }catch{
        console.log('Se perdio la conexion con el servidor')
    }
}
//esta variable es para que el ciclo me funciones y pueda salirme en un momento dado
(async function (){  
    let operacion = true
    //aqui esta el bucle prinsipal que nos hace posible seleccionar varias opciones hasta darle salir
    while(operacion){
        console.log('Para buscar un libro, Escribe (a)\nPara reservar un libro, Escribe (b)\nPara mostras todos los libros, Escribe (c)\nPara salir, Escribe (d)\n')
        let operaciones = prompt('ingresa una operacion: ')
        switch(operaciones){
            case ('a'):
                await ConsultaLibro(biblioteca)
                break;
            case ('b'):
                await reservaLibro(biblioteca,false)
                break;
            case ('c'):
                await MostrarTodosLibros(biblioteca)
                break;
            case ('d'):
                console.log('Saliendo...')
                await esperar(numAleatorio())
                operacion = false
                break;
            default: console.log('operacion no valida')
        }
    }
    console.log('Has salido correctamente, te esperamos pronto')
}
)()