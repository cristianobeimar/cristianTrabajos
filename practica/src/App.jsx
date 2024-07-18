import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import ayteLogo from "/ayte_1.svg";
import Profile from "./components/Profile";
import "./App.css";
import ListPeople from "./components/ListPeople";
import Hola from "./components/Hola";
import Product from "./components/Product";

const sebastian = {
  name: "sebastian",
  lastName: "Quinayas",
  age: "21",
};

const studentsArray = [
  {
    name: "Sebastian",
    img: "https://images.generated.photos/3ihy_0Px4_i3QIX1C7CKhwoyVMBGYgWo6BapiWPutEQ/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/NjA3NjM2LmpwZw.jpg",
    telephone: "31154684",
    address: "Cra 34 # 78 80",
    age: 22,
  },
  // {
  //   name: 'Nicol',
  //   img: 'https://images.generated.photos/w6sm_W9-P4L6uq4PZgbWbRAjpMs4i20zFhTR7OdZvwY/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/MDU4MjI1LmpwZw.jpg',
  //   telephone: '3215447898',
  //   age: 17
  // },
  // {
  //   name: 'Yineth',
  //   img: 'https://images.generated.photos/I-8vtUEQuFUEGufmOWkf6j5RvJNZ1L1EwBvEJkCMWxQ/rs:fit:512:512/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/MjE3ODcyLmpwZw.jpg',
  //   telephone: '31245635',
  //   age: 21
  // },
  // {
  //   name: 'María',
  //   img: 'https://images.generated.photos/M9OYXAyCE4n45d0URzVlI5QjzPFynMbbLC-YNi5UTfY/rs:fit:512:512/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/ODY2NjU5LmpwZw.jpg',
  //   telephone: '3238791544',
  //   address: '123 Main St',
  //   age: 21
  // },
  // {
  //   name: 'Eider',
  //   img: 'https://images.generated.photos/qtM6F5RVs4lrwunkkwHMUltMvB-mcSqh9hpgL6ydf60/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/NTAxMTgzLmpwZw.jpg',
  //   telephone: '321544894',
  //   age: 17
  // },
  // {
  //   name: 'Cristhian',
  //   img: 'https://images.generated.photos/rLxFEbpzs8d8VDNZ5Gob57cTXEYkCGpht5tnd9xRT7M/rs:fit:512:512/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/OTU1NzcxLmpwZw.jpg',
  //   telephone: '321789684',
  //   age: 23
  // },
];

function getRandomPerson(customArray) {
  const randomIndex = Math.floor(Math.random() * customArray.length);
  return customArray[randomIndex];
}

export default function App() {
  const [persona, setPersona] = useState({});
  const [students, setStudents] = useState(studentsArray);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setPersona({ ...persona, [name]: value });
  };

  function handleClick(event) {
    event.preventDefault();
    setStudents([...students, { ...persona }]);
  }

  return (
    <>
      <h1>Manejo de Eventos</h1>
      {/* <Hola name={persona.name} /> */}
      {/* <Product /> */}
      <form action="">
        <input
          onChange={handleChange}
          type="text"
          name="name"
          placeholder="Nombre"
        />
        <input
          onChange={handleChange}
          type="text"
          name="telephone"
          placeholder="Teléfono"
        />
        <input
          onChange={handleChange}
          type="text"
          name="age"
          placeholder="Edad"
        />
        <input
          onChange={handleChange}
          type="text"
          name="img"
          placeholder="Url imagen"
        />
        <div>
          <button onClick={handleClick}>Agregar</button>
        </div>
      </form>
      <ListPeople>
        {students.map((student, index) => (
          <Profile
            key={index}
            name={student.name}
            img={student.img}
            telephone={student.telephone}
            age={student.age}
            address={student.address}
          />
        ))}
      </ListPeople>
    </>
  );
}
