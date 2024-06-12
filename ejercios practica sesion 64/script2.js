const boton= document.getElementById("boton");
boton.addEventListener("click", function(){

const texto= document.getElementById("cambiar")
if(texto.style.display=="none"){
    texto.style.display = "block"
    boton.textContent="OCULTAR TEXTO"
}
else {
texto.style.display = "none"
boton.textContent="MOSTRAR TEXTO"
}
})