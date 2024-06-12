/*script de primedio de notas de un alumno*/

function promedio(a, b, c, d, e ){
    let resultado 
    resultado = parseFloat(a) + parseFloat(b) + parseFloat(c) + parseFloat(d) + parseFloat(e)
    resultado = resultado/5
    return resultado
  
}
let nota1 = parseFloat(prompt("ingresa la primera nota: "))
let nota2 = parseFloat(prompt("ingresa la segunda nota: "))
let nota3 = parseFloat(prompt("ingresa la trecera nota: "))
let nota4 = parseFloat(prompt("ingresa la cuarta nota: "))
let nota5 = parseFloat(prompt("ingresa la quinta nota: "))

nota1 = 1
nota2 = 5
nota3 = 3
nota4 = 2
nota5 = 5

resultado = promedio(nota1,nota2, nota3, nota4, nota5)
console.log ("el promedio es " + resultado)

/*script de calcular el area y el perimetro de un rectangulo*/

function calcularPerimetroArea(b,h){
    let resultadoPerimetro = ( (b + h) * 2);
    let resultadoArea = (b * h );
    return [resultadoPerimetro,resultadoArea]
    
    }
    
    let base = parseFloat(prompt("ingresa la base del rectanguo: "))
    let altura = parseFloat(prompt("ingresa la altura del rectangulo: "))
    let total = calcularPerimetroArea(base,altura)
    console.log(`El perimetro es: ${total[0]} \nEl area es: ${total[1]}`)
    console.log('El perimetro es: '+ total[0] +' \nEl area es: '+total[1])

    /*1-Crea una función que acepte dos números y una cadena que 
    represente una operación ("suma", "resta", "multiplicacion", "division"). La función debe realizar 
    la operación correspondiente y devolver el resultado.*/

    let num1 = parseInt(prompt("ingrese el primer numero: "))
let num2 = parseInt(prompt("ingrese el segundo numero: "))
let resultado

function operacionesAritmeticas ( ){
    let continuar =  true
while (continuar) {
let operacion = prompt("Ingrese operación (suma, resta, multiplicacion, division): ")
switch (operacion) {
    case "suma":
        resultado = num1 + num2;
        break;
    case "resta":
        resultado = num1 - num2;
        break
    case "multiplicacion":
        resultado = num1 * num2;
        break;
    case "division":
        resultado = (num1 / num2)
        console.log("Fin de operación.")
        break
    default:
        console.log("Operación inválida.")
        
       
}
 return resultado;
}
}
let respuesta = operacionesAritmeticas()
console.log (" el resultado es: " + resultado)

/*2- Escribe una función que convierta una temperatura de Celsius
 a Fahrenheit o viceversa. La función debe aceptar la temperatura 
 y una cadena que indique la escala de temperatura ("C" para Celsius, "F" para Fahrenheit) 
y devolver la temperatura convertida.*/

let temperatura = parseFloat(prompt("ingresa la temperatura: "))
    let grados = prompt("en que grados esta la temperatura (C , F): ")
    let comvercion = prompt("selecciona a que escala necesitas la tamperatura(F, C ): ") 


    function combertirTemperatura(a ){    
    let teperaturacomvertida;
   
    
    switch (comvercion) {
        case "F":
            teperaturacomvertida = (a * (9/5)) + 32;
            break;
        case "C":
            teperaturacomvertida = ( a - 32) * (5/9);
            console.log(" finde operacion")
            break;
            default:
            console.log("dato incorrecto")
    }
    return teperaturacomvertida
    }
    
    let respuesta1 = combertirTemperatura(temperatura);
    console.log (" El resultado es: " + respuesta + "°" )

    /*ejercico 1 
    sesion 33
    Desarrollar un sistema para gestionar una lista de tareas. 
    Los usuarios podrán añadir tareas a la lista, marcar tareas como 
    completadas y ver las tareas actuales.Especificaciones:
    Añadir una nueva tarea con un título.
    Permitir al usuario especificar el índice de la tarea a marcar como completada.
    Mostrar todas las tareas y su estado (completada o no).*/
    
    let tareas = [{
        titulo: 'tarea1',
        descripcionTarea: 'realizar el aseo',
        estadoTarea: false
      }
    ]
    
    function agregarTarea(tituloF,descripcion) {
        tareas.push({titulo:tituloF,descripcionTarea:descripcion,estadoTarea:false})
        console.log("Tarea agregada")
    }
    function mostrarTareas() {
        tareas.forEach((item, index) =>
            console.log(` ${index +1} - titulo de la tarea: ${item.titulo}, descripcion: ${item.descripcionTarea}, estado: ${item.estadoTarea ? 'Tarea completa':'Tarea incompleta' }`))
    }
    function completarTreas(){
        let numTarea = parseInt(prompt("ingrese el numero dela tarea que deseas completar"))
        numTarea -= 1
        let tareaCopletar = tareas[numTarea]
        if (tareaCompletar == undefined){
            console.log("tarea no encontrada")
        }else{
            if (tareaCompletar.estadoTrea == true){
                console.log("tarea ya completada")
            }else{
    
        tareaCompletar.estadoTarea = true
        console.log ("tarea" + tareaCompletar.titulo + "completa")
            }
    }}
    let continuar = true
    while(continuar) {
        let operacion = prompt("Ingresaar el numero de la operacion que deseas realizar: (\n1:agregar tarea, \n2:mostrar todas las tareas, \n3:completar tareas, \n4:salir.): ")
    
        switch (operacion) {
            case "1":
                let tituloTarea = prompt("ingrese el titulo de la tarea: ");
                let descripcionTarea = prompt("ingrese la descripcion de la tarea: ")
                agregarTarea(tituloTarea,descripcionTarea)
                break;
            case "2":
                mostrarTareas()
                break
            case "3":
                 completarTreas()
                break;
            case "4":
                break
            default:
                console.log("Operación inválida.")
        }
    }
    

       /*Crear una función en JavaScript que reciba una fecha y un número de días.
       Luego calcule qué día de la semana será después de esos días, puede utilizar 
       la clase Date de JavaScript. 
       La función calculará la nueva fecha añadiendo los días especificados
        a la fecha inicial, y luego determinará el día de la semana correspondiente.*/
       
        function calcularNuevaFechaYDiaSemana() {

 

            let fechaInicial = prompt('Ingresa la fecha: ');
            let diasAAnadir = parseInt(prompt('Ingresa el número de días a añadir: '));
            let nuevaFecha = new Date(fechaInicial);
          
        
            nuevaFecha.setDate(nuevaFecha.getDate() + diasAAnadir);
          
            let diasSemana = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
          
            let diaSemana = diasSemana[nuevaFecha.getDay()];
          
            console.log('La nueva fecha es: ' + nuevaFecha.toISOString().split('T')[0]);
            console.log('El día de la semana correspondiente es: ' + diaSemana);
          
          }
          calcularNuevaFechaYDiaSemana();

   /*ejercico 2 crear una versión de la calculadora donde cada operación
matemática (+, -, *, /) se realice mediante una función
dedicada.
2. Función para procesar la entrada del usuario y calcular el
resultado, de acuerdo a la operación deseada.
3. La calculadora deberá continuar realizando operaciones,
hasta que en la entrada del operador se escriba la palabra
“salir”.*/

function ingresarNumero(index){
    return parseInt(prompt("Ingresar numero " + index + ": "));
   }
   function ingresarOperacion(){
    return prompt("Ingresar el signo (+,-,*,/) de la operacion que desea realizar: ");
   }
   function sumar(num1, num2) {
       return num1 + num2;
   }
   function restar(num1, num2) {
       return num1 - num2;
   }
   function multiplicar(num1, num2) {
       return num1 * num2;
   }
   function dividir(num1, num2) {
       return num1 / num2;
   }
   function calcularResultado(num1, num2, operacion) {
       let resultado;
   
       switch (operacion) {
         case "+":
           resultado = sumar(num1, num2);
           break;
         case "-":
           resultado = restar(num1, num2);
           break;
         case "*":
           resultado = multiplicar(num1, num2);
           break;
         case "/":
             resultado = dividir(num1, num2);
           break;
         default:
           resultado = "Operación no válida";
       }
       return resultado;
   }
   function salida(){
       return prompt("Desea salir? (si,no): ");
   }
   
    let operacion;
    let salir;
    
    console.log(`¡Hola!`);
    while(salir != "si"){
       num1 = ingresarNumero(1);
       num2 = ingresarNumero(2);
       operacion = ingresarOperacion();
       resultado = calcularResultado(num1, num2, operacion);
       console.log(`El resultado de la operación es: ${resultado}`);
       salir = salida();
   }
   console.log(`¡Adios!`);
