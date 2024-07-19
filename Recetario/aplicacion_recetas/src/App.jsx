import { useState } from "react";
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import RecipeCreator from "./components/RecipeCreator";
import "./App.css";

const Recipes = [
  {
    title: "pollo asado",
    Description: "Tomamos 500ml de agua y calentamos a fuego medio",
    Ingredientes: [
      { nombre: "sal", Cantidad: "50", Unidad: "gr" },
      { nombre: "pollo", Cantida: "300", Unidad: "gr" },
    ],
  },
  {
    title: "pollo apanado",
    Description: "Tmamos los trosos de pollo y cosinamoas a fuego lento ",
    Ingredientes: [
      { nombre: "sal", Cantidad: "50", Unidad: "gr" },
      { nombre: "pollo", Cantida: "300", Unidad: "gr" },
    ],
  },
];

const loading = true;
const error = false;

export default function App() {
  return (
    <>
      <header></header>
      <h1>Mi recetario</h1>
      <main className="main-container">
        <section className="flex-1">
          <h2>Creador de recetas</h2>
          <RecipeCreator />
        </section>

        <section className="flex_1">
          <h2>Listado de recetas</h2>

          {/* renderisado condicional utilizando AND (&&) */}
          {Recipes.length <= 0 && "Aun no hay recetas"}

          {/* {loading ? <p>cargando</p>} */}

          {Recipes.map((Recipe, index) => (
            // <Recipes key={index} {...Recipes} />
            <div key={index}>
              <h3>{Recipe.title}</h3>
              <p>{Recipe.Description}</p>
            </div>
          ))}
        </section>
      </main>
      <footer></footer>
    </>
  );
}
