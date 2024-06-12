fetch("https://jsonplaceholder.typicode.com/users")
.then(response => response.json())
  .then(data => {
    let lista = document.getElementById("lista")
    data.forEach(element => {
   let item = document.createElement("li")
   item.innerHTML=`<b>nombre:</b> <i>${element.name} </i>- <b>Correo:</b> ${element.email}`
lista.appendChild(item)

    }); 
  }
    
  );