let hora = new Date().getHours();
switch (hora) {
  case 9:
    console.log("Buenos días!");
    break;
  case 14:
    console.log("Buenas tardes!");
    break;
  case 20:
    console.log("Buenas noches!");
    break;
  default:
    console.log("Hola!");
}

/*1. Escribe un programa que simule un sistema de menú
 para una aplicación. El menú debe tener las siguientes opciones:
'a': Mostrar ayuda.
'b': Abrir configuraciones.
'c': Iniciar nuevo juego.
'd': Salir del programa.*/
function menuOpcion(){
    return prompt 
};
let letra = ""
 
while ( letra  != 'd'){
letra = prompt("escribe una letra de entre la a y d: ")

 switch (letra){
     case "a":
console.log("mostrar ayuda");
break;
case "b":
    console.log("abrir configuraciones");
    break;
    case "c":
        console.log("iniciar nuevo juego");
    break;
    case "d":
        console.log("salir del programa");
        break;
        default:
        console.log("volver a inicio");
}

}
console.log("gracias por preferirnos");


function calcularTarifa (transporte, distancia){
  let tarifa = 0;
  
while (transporte  != 'd'){
transporte = prompt("elige el medio de transporte que necesitas: " +
"\nmetro" + "\nautobus" + "\ntaxi")

 switch (transporte){
     case "metro":
      if (distancia <= 5 ){
          tarifa = 4.500;
      }
      else if(distancia <= 15 ){
          tarifa = 7.500;
      }
      else{
          tarifa = 10.500;
           }
           }
      }
          }
     
 
while (transporte != 'd'){
  transporte = prompt("elige el medio de transporte que necesitas: " +
  "\nmetro" + "\nautobus" + "\ntaxi")
  
   switch (transporte){
       case "metro":
  console.log("mostrar ayuda");
  break;
  case "autobus":
      console.log("");
      break;
      case "taxi":
          console.log("");
      break;
   
          default:
          console.log("");
  }
  }
  console.log("gracias por preferirnos")
calcularTarifa();
getMenuOption();
