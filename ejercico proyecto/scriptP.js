



/*let recetas = JSON.parse(localStorage.getItem('recetas')) || [];

function AgregarReceta() {
    let receta = {
        nombre: "",
        preparacion: "",
        ingredientes: []
    }

    receta.nombre = document.getElementById("nombreReceta").value;
    receta.preparacion = document.getElementById("preparacionReceta").value;

    // Obtener los ingredientes ingresados por el usuario
    let nombreIngrediente = document.getElementById("nombreIngrediente").value;
    let cantidadIngrediente = document.getElementById("cantidadIngrediente").value;

    // Crear un objeto de ingrediente y agregarlo a la lista de ingredientes de la receta
    let ingrediente = {
        nombre: nombreIngrediente,
        cantidad: cantidadIngrediente
    };
    receta.ingredientes.push(ingrediente);

    recetas.push(receta);

    localStorage.setItem('recetas', JSON.stringify(recetas));

    let listaRecetas = document.getElementById("listaRecetas");
    let datosReceta = document.createElement("li");
    datosReceta.innerHTML = receta.nombre + "<br>";
    datosReceta.innerHTML += "Preparación: " + receta.preparacion + "<br>";
    datosReceta.innerHTML += "Ingredientes: <br>";

    // Mostrar cada ingrediente en la lista de la receta
    receta.ingredientes.forEach(ingrediente => {
        datosReceta.innerHTML += "- " + ingrediente.nombre + ": " + ingrediente.cantidad + "<br>";
    });

    datosReceta.innerHTML += "\n";

    listaRecetas.appendChild(datosReceta);

    document.getElementById("nombreReceta").value = "";
    document.getElementById("preparacionReceta").value = "";
    document.getElementById("nombreIngrediente").value = "";
    document.getElementById("cantidadIngrediente").value = "";
}

function EliminarReceta() {
    recetas.pop();

    localStorage.setItem('recetas', JSON.stringify(recetas));

    let listaRecetas = document.getElementById("listaRecetas");
    listaRecetas.removeChild(listaRecetas.lastChild);
}*/
let recetas = JSON.parse(localStorage.getItem('recetas')) || [];

function AgregarReceta() {
    let receta = {
        nombre: "",
        preparacion: "",
        ingredientes: []
    }

    receta.nombre = document.getElementById("nombreReceta").value;
    receta.preparacion = document.getElementById("preparacionReceta").value;

    // Obtener los ingredientes ingresados por el usuario
    let nombreIngrediente = document.getElementById("nombreIngrediente").value;
    let cantidadIngrediente = document.getElementById("cantidadIngrediente").value;

    // Crear un objeto de ingrediente y agregarlo a la lista de ingredientes de la receta
    let ingrediente = {
        nombre: nombreIngrediente,
        cantidad: cantidadIngrediente
    };
    receta.ingredientes.push(ingrediente);

    recetas.push(receta);

    localStorage.setItem('recetas', JSON.stringify(recetas));

    let listaRecetas = document.getElementById("listaRecetas");
    let datosReceta = document.createElement("li");
    datosReceta.innerHTML = receta.nombre + "<br>";
    datosReceta.innerHTML += "Preparación: " + receta.preparacion + "<br>";
    datosReceta.innerHTML += "Ingredientes: <br>";

    // Mostrar cada ingrediente en la lista de la receta
    receta.ingredientes.forEach(ingrediente => {
        datosReceta.innerHTML += "- " + ingrediente.nombre + ": " + ingrediente.cantidad + "<br>";
    });

    datosReceta.innerHTML += "\n";

    listaRecetas.appendChild(datosReceta);

    document.getElementById("nombreReceta").value = "";
    document.getElementById("preparacionReceta").value = "";
    document.getElementById("nombreIngrediente").value = "";
    document.getElementById("cantidadIngrediente").value = "";
}

function EliminarReceta() {
    recetas.pop();

    localStorage.setItem('recetas', JSON.stringify(recetas));

    let listaRecetas = document.getElementById("listaRecetas");
    listaRecetas.removeChild(listaRecetas.lastChild);
}

function agrarIngrediente() {
    // Función para agregar ingredientes (debes implementarla según tu lógica)
}