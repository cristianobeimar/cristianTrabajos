import React, { useEffect, useState } from "react";

export default function BuscadorComponent({ datos }) {
  const [busqueda, setBusqueda] = useState("");
  const [productosFiltrados, setproductosFiltrados] = useState([]);

  const buscadorInput = (e) => {
    const p = datos.filter((item) => {
      return item.TITULO.includes(e.target.value);
    });
    setBusqueda(e.target.value);
    setproductosFiltrados(p);
    console.log(productosFiltrados);
    
  };

  return (
    <div>
      <input
        type="text"
        placeholder="search products..."
        value={busqueda}
        onChange={buscadorInput}
      />
      <ul>
        {productosFiltrados.length > 0 && busqueda != ''  &&
          productosFiltrados.map((e) => (
            <>
              <li>{e.TITULO}</li>
            </>
          ))}
      </ul>
    </div>
  );
}
