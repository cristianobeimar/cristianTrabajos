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
    const botonCompletar = document.createElement("button")
    botonCompletar.textContent = "X"
    botonCompletar.style.backgroundColor = "#ff0000"

    tareas.map((item)=>{
        ulMostrar.style.color = "#ff0000" 
        ulMostrar.innerHTML += `<li>nombre: ${item.titulo} -- Descripcion: ${item.descripcionTarea}</li>`
        ulMostrar.appendChild(botonCompletar)
    })

    botonCompletar.addEventListener("click", function(){
        ulMostrar.style.color = "#006400" 
        botonCompletar.textContent = "✔"
        botonCompletar.style.backgroundColor = "#00ff00"
    })

}
function eliminarTarea() {
    let arayTareas = JSON.parse(localStorage.getItem('tareas'))
    arayTareas.pop()
    localStorage.setItem('tareas', JSON.stringify(arayTareas))
    ulMostrar.innerHTML = ''
    arayTareas.map((item)=>{
        ulMostrar.innerHTML += `<li>nombre: ${item.titulo} -- Descripcion: ${item.descripcionTarea}</li>`
    })
    
}

