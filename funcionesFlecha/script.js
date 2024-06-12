/*1 calcular el area y el perimetro de un cuadrado*/ 

let lado = parseInt(prompt("ingresa la medida del cuadrado a calcular: "))

let areaCuadrado = ``;
const calcularArea = (lado) => `el area del cuadrado es: ${lado * 2}`
    
console.log(calcularArea(lado));

const calcularPerimetro = (lado) =>`el perimetro del cuadrado es: ${ lado * 4}`
    
console.log(calcularPerimetro(lado));

/*2 calcular el area y el perimetro de un rectangulo*/

let base = parseInt(prompt("ingresa la base del rectangulo a calcular: "))
    let altura = parseInt(prompt("ingresa la altura del rectangulo: "))
    
    const calcularArea = (base, altura) =>`el area del retangulo es: ${base * altura}`
console.log(calcularArea(base, altura))

const calcularPerimetro = (base, altura) => `el perimetro del rectangulo es: ${(base + altura) * 2}`
console.log(calcularPerimetro(base, altura))


/*3 calcular el area y el perimetro de un trinagulo */

let lado1 = parseInt(prompt("ingresa el primer lado del triangulo: "))
let base = parseInt(prompt("ingresa la base del triangulo: "))

const areaTriangulo = (lado1, base) => `el area del triangulo es: ${(base * lado1) /2}`

console.log(areaTriangulo(lado1, base))

const perimetroTriangulo = (lado1, base) => `el perimetro del triangulo es: ${lado1 + base}`
console.log(perimetroTriangulo(lado1, base))

/*4 calcular el area y el perimetro de una circunferencia */

let perimetroC = parseInt(prompt("ingresa el valor del perimetro que deseas calcular: "))
let areaC = parseInt(prompt("ingresa el valor del area que deseas calcular: "))

const perimetroCircunferencia = (perimetroC, areaC) => `el perimetro de la circunferencia es: ${3.1416 * perimetroC}`
 console.log(perimetroCircunferencia(perimetroC, areaC))
 

const areaCircunferencia = (perimetroC, areaC) => `el area de la circunferencia es: ${3.1416 * (areaC )**2}`
  console.log(areaCircunferencia(perimetroC, areaC))

/*5 calcular el volumer y el area superfivial de un cubo */

let volumen = parseInt(prompt("ingresa el valor del lado del cubo: "))


const volumenCubo = (volumen) => `el volumen del cubo es: ${volumen**3}`
console.log(volumenCubo(volumen));

const areaSuperficial = (volumen) => `el area superficial es: ${6 *(volumen **2)}`

console.log(areaSuperficial(volumen))

/*6 calcular el el volumer y el area superficial de una esfera */

