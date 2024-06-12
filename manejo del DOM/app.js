let body = document.getElementById("body")
body.addEventListener('mouseover',()=>{
         body.style.backgroundColor ='yellow'
});
    
body.addEventListener('mouseout',()=>{
    body.style.backgroundColor = 'white'
})
let buton = document.getElementById("buton")
buton.addEventListener('mouseover',()=>{
 buton.style.backgroundColor ='red'
});
buton.addEventListener('mouseout',()=>{
    buton.style.backgroundColor = 'green'
});

let imag = document.getElementById("imagen");
imag.addEventListener('mouseover',()=>{ 
});

// let parrafo = document.createElement('p');
// parrafo.textContent = ('ESTE ES MI NUEVO PARRAFO');
// body.appendChild(parrafo)

// let cambio = document.querySelector('.cambio');
// cambio.innerHTML = ('nuevo titulo');
num = 5
let listas = document.getElementById('lista')
let lista = document.createElement('li');
lista.id = `item${num}`
num++
lista.textContent = ('nueva lista')
listas.appendChild(lista)

let botonEliminar = document.getElementById("eliminar");
botonEliminar.addEventListener('click',()=>{
    let parent = document.getElementById("lista");

    let child = document.getElementById("item5");
    parent.removeChild(child)
    console.log(parent)
});
let disminuir = document.getElementById("disminuir");
disminuir.addEventListener('click',function() {
imag = document.getElementById("imagen")

    imag.width = 200
})

let aumentar = document.getElementById("aumentar");
aumentar.addEventListener('click',function() {
imag = document.getElementById("imagen")

    imag.width = 250
})
