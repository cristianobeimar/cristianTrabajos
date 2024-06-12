var fondo = localStorage.getItem("fondo");

if (fondo === null) {
    fondo = "#000000";
}
document.getElementById("body").style.backgroundColor = fondo;

function Morado(){
    fondo = "#7D2181"; 
    document.getElementById("body").style.backgroundColor = fondo;

    localStorage.setItem("fondo",fondo);
}
function Naranja(){
    fondo = "#ff8000"; 
    document.getElementById("body").style.backgroundColor = fondo;

    localStorage.setItem("fondo",fondo);
}