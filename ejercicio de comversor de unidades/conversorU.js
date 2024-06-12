function convertir(){
let cantidad= parseFloat(document.getElementById("impoutCantida").value)
 let unidadEntrada = document.getElementById("selectUnidaEntrada").value
 let unidadSalida = document.getElementById("selectUnidaSalida").value
 let resultado;

if (unidadEntrada === unidadSalida ==="mi"){
  resultado = cantidad;
} else if (unidadEntrada ==="km" && unidadSalida === "mi"){
  resultado = cantidad * 0.621371;
}else if (unidadEntrada ==="mi" && unidadSalida === "km"){
  resultado = cantidad * 1.60934;
}else if (unidadEntrada ==="C" && unidadSalida === "F"){
  resultado = (cantidad * 9/5) +32;
}else if (unidadEntrada ==="F" && unidadSalida === "C"){
  resultado = (cantidad - 32) * 5/9;

}
documento.getElementById("resultado"). innerText = resultado;
}