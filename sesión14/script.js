var visitas = localStorage.getItem("visitas");
if (visitas === null) {
    visitas = 0
} else {
    visitas = parseInt(visitas);
}
visitas = visitas +1 ;
console.log("Numero de visitas", visitas);
localStorage.setItem("visitas", visitas)
