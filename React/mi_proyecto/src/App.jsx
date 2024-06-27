import React, { useEffect, useState } from "react";
// import Getproductos from "./components/Getproductos";
import Getproductos from "./components/Getproductos";

function App() {
  const [products, setproducts] = useState([]);

  const funcionProducts = async () => {
    const proctos = await Getproductos();
    setproducts(proctos);
  };

  useEffect(() => {
    funcionProducts();
  }, []);
  console.log(products);
  return (
    <>
      <h1>esta es la portada </h1>
      {products.map((e) => {
        return (
          <>
            <h3>{e.title}</h3> 
            <p>{e.description}</p>
            <p>{e.price}</p>
            <img src={e.image} alt="e.title" />
          </>
        );
      })}
    </>
  );
}

export default App;
