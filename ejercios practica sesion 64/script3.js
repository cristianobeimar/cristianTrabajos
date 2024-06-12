let abuela = document.getElementById("abuela")
let mamá = document.getElementById("mamá")
let hija = document.getElementById("hija")

abuela.addEventListener("click", function(evento){
    alert("evento: "+ evento.currentTarget.id)

}
)
mamá.addEventListener("click", function(evento){
    alert("evento: "+ evento.currentTarget.id)

}
)
hija.addEventListener("click", function(evento){
    alert("evento: "+ evento.currentTarget.id)

}
)