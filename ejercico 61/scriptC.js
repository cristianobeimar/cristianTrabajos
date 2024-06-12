let contadorVisitas = parseInt(localStorage.getItem("contador")) || 0 
contadorVisitas++
localStorage.setItem("contador",contadorVisitas)

if (contadorVisitas === 1) {
    let tarea = []
    localStorage.setItem("tareas",JSON.stringify(tarea))
}

function agregarTarea(){
    let tareas = JSON.parse(localStorage.getItem('tareas'))
    console.log(tareas)
    let inputTitulo = document.getElementById('inputTitulo')
    let inputDescripcion = document.getElementById('inputDescripcion')
    tareas.push({titulo:inputTitulo.value, descripcionTarea:inputDescripcion.value})
    localStorage.setItem("tareas",JSON.stringify(tareas))
    console.log("Tarea agregada")
    let ulMostrar = document.getElementById('ulMostrar')
    ulMostrar.innerHTML = ''
    MostrarTareas()
}
function MostrarTareas(){
    let tareas = JSON.parse(localStorage.getItem('tareas'))
    let ulMostrar = document.getElementById('ulMostrar')
    
    console.log(ulMostrar)
    tareas.map((item)=>{
        ulMostrar.innerHTML += `<li>nombre: ${item.titulo} -- Descripcion: ${item.descripcionTarea}</li>`
    })
}
// function eliminarTarea() {
//     let borrar = document.getElementById("eliminar")
//     let indiceAEliminar = prompt("Ingrese el índice de la tarea que desea eliminar:");

//     if (indiceAEliminar >= 0 && indiceAEliminar < tareas.length) {
//         tareas.splice(indiceAEliminar, 1);
//         console.log("Tarea eliminada correctamente.");
//     } else {
//         console.log("Índice no válido. Intente de nuevo.");
//     }
// }
// let continuar = true
// 