let formulario = document.getElementById("Registro");
formulario.addEventListener("submit", (evento) => {
  evento.preventDefault();
  let nombre = document.getElementById("nombre");
  let apellido = document.getElementById("Apellido");
  let email = document.getElementById("Email");
  fetch("https://jsonplaceholder.typicode.com/users&quot", {
    method: "post",
    body: JSON.stringify({
      nombre: nombre,
      apellido: apellido,
      email: email,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      alert("Usuario registrado");
    });
});