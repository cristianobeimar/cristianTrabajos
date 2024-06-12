

function agragarReceta(titulo, instrucciones, ingredientes) {
    const receta = {
      titulo: Titulo,
      instructiones: Instruciones,
      ingredientes: Ingredientes
    };
    // Obtener recetas guardada del almacenamiento local
    let recetas = JSON.parse(localStorage.getItem('recetas')) || [];
    recetas.push(receta);
    localStorage.setItem('recetas', JSON.stringify(recetas));
    displayRecetas();
  }

  // Función para eliminar una receta ya agregada
  function eliminarReceta(index) {
    let recetas = JSON.parse(localStorage.getItem('recetas'));
    recetas.splice(index, 1);
    localStorage.setItem('recetas', JSON.stringify(recetas));
    displayRecipes();
  }

  