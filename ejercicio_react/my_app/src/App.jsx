import { useState } from "react";
// import reactLogo from "./assets/react.svg";
import viteLogo from "../public/vite.svg";
import logo from "../public/ayte_1.svg";
import "./App.css";
import Profile from "./componentes/app.jsx";

// export default function App() {
//   const [count, setCount] = useState(0);
//   // const [persona, setpersona] = useState(second);
//   const sebastian = {
//     name: "cristian",
//     lastName: "Yalanda",
//     age: "23",
//   };

export default function App() {
  const [count, setCount] = useState(0);
  const [persona, setPersona] = useState({});

  const students = [
    {
      name: "cristian",
      img: "https://i.imgur.com/MK3eW3As.jpg",
      telephone: "3014622588",
      address: "Cra 34 #55 8",
      age: "22",
    },
    {
      name: "andres",
      img: "https://i.imgur.com/MK3eW3As.jpg",
      telephone: "3014622588",
      address: "Cra 34 #55 8",
      age: "26",
    },
    {
      name: "Maria",
      img: "https://i.imgur.com/MK3eW3As.jpg",
      telephone: "3014622588",
      address: "Cra 34 #55 8",
      age: "21",
    },
  ];
  function fgetRamdomPerson(customArray) {
    const ramdonIngetRamdomPersondex = Math.floor(Math.random() * customArray.length
    );
    setPersona(customArray[ramdonIngetRamdomPersondex]);
  }

  
  return (
    <>
      <div>
        {students.map((students) => (
          <Profile
          name={persona.name}
          img={persona.img}
          telephone={persona.telephone}
          age={persona.age}
          address={persona.address}
          />
        ))}
      </div>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img
            src="https://d3nv2arudvw7ln.cloudfront.net/images/global/195/1003/93986-new3-pzero-trofeo-r-technology-1505470075362.png"
            className="logo react"
            alt="React logo"
          />
        </a>
        <a href="#" target="_blank">
          <img src={logo} className="logo ayte" alt="ayte logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          incrementar
        </button>

        <button onClick={() => setCount((count) => count - 1)}>
          decrementar
        </button>

        <button onClick={() => setCount(0)}>restablecer</button>
        <p>El valor del contador es {count}</p>
        <button onClick={() => fgetRamdomPerson(students)}>
          cambiar invitado
        </button>
        {/* <p>{persona}</p> */}
        <p className="read-the-docs">La persona invitada es :</p>
        <Profile
          name={persona.name}
          img={persona.img}
          telephone={persona.telephone}
          age={persona.age}
          address={persona.address}
          />
      </div>
    </>
  );
}
